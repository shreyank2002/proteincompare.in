import { describe, expect, it } from "vitest"
import { findTrustifiedMatch, trustifiedDatabase } from "./trustifiedDatabase"
import { products, resolveTrustified, type Product } from "./products"

// These lock in the matcher's behaviour on the cases that are easy to regress: word-order
// differences that must still match, and near-misses that must NOT match. The failure mode
// worth guarding against is a false positive — showing one product's lab result for another.

describe("trustifiedDatabase", () => {
  it("has the expected shape and size", () => {
    expect(trustifiedDatabase).toHaveLength(100)
    for (const entry of trustifiedDatabase) {
      expect(entry.testedDate).toMatch(/^\d{4}-\d{2}-\d{2}$/)
      expect(entry.reportUrl).toMatch(/^https:\/\/www\.trustified\.in\//)
      expect(["Pass", "Fail", "Expired"]).toContain(entry.status)
    }
  })
})

describe("findTrustifiedMatch — word-order and extra-word tolerance", () => {
  it("matches despite interleaved words the entry omits", () => {
    const match = findTrustifiedMatch("The Whole Truth", "Cleanest Whey Protein Concentrate, Unflavoured")
    expect(match).toMatchObject({ productName: "Cleanest Protein", status: "Pass", testedDate: "2023-12-17" })
  })

  it("matches despite reversed word order", () => {
    const match = findTrustifiedMatch("Nakpro", "Gold Whey Protein")
    expect(match).toMatchObject({ productName: "Whey Gold", status: "Pass", testedDate: "2023-07-23" })
  })

  it("prefers the closest candidate when a brand has several similar SKUs", () => {
    const match = findTrustifiedMatch("MuscleBlaze", "Biozyme Performance Whey Protein")
    expect(match).toMatchObject({ productName: "Biozyme Performance Whey", status: "Pass", testedDate: "2023-03-27" })
  })

  it("is case- and punctuation-insensitive on both fields", () => {
    const match = findTrustifiedMatch("muscle blaze", "biozyme iso zero")
    expect(match).toMatchObject({ productName: "Biozyme Iso Zero", status: "Pass", testedDate: "2023-03-15" })
  })
})

describe("findTrustifiedMatch — must not produce false positives", () => {
  it("does not let MyPro's Fail leak onto MyProtein's product", () => {
    // "mypro" is a character-level substring of "myprotein"; brand matching compares whole words
    // so these stay distinct. A regression here would report a Fail for an untested product.
    expect(findTrustifiedMatch("MyProtein", "Impact Plant Protein")).toBeUndefined()
    expect(findTrustifiedMatch("MyPro", "100% Plant Protein")).toMatchObject({ status: "Fail" })
  })

  it("does not let a shared sub-brand word carry a match on its own", () => {
    // "biozyme" spans five MuscleBlaze SKUs, so it identifies the line, not the product. Without
    // the distinctiveness rule this inherits "Biozyme Whey Protein"'s Pass.
    expect(findTrustifiedMatch("MuscleBlaze", "Biozyme Clear Whey Isolate")).toBeUndefined()
    expect(findTrustifiedMatch("MuscleBlaze", "Biozyme Clear Whey Isolate, Icy Orange")).toBeUndefined()
  })

  it("returns undefined for brands absent from the database", () => {
    expect(findTrustifiedMatch("Optimum Nutrition", "Gold Standard 100% Whey")).toBeUndefined()
    expect(findTrustifiedMatch("No Such Brand", "Whey")).toBeUndefined()
  })

  it("returns undefined when the brand is present but the product is not", () => {
    expect(findTrustifiedMatch("Nutrabay", "Totally Made Up Product")).toBeUndefined()
  })

  it("returns undefined for empty input", () => {
    expect(findTrustifiedMatch("", "")).toBeUndefined()
    expect(findTrustifiedMatch("Nutrabay", "")).toBeUndefined()
    expect(findTrustifiedMatch("", "Pea Protein Isolate")).toBeUndefined()
  })
})

describe("findTrustifiedMatch — brand matching rules", () => {
  it("treats a brand as a match when its words are a subset of a longer brand", () => {
    // "Nutrabay" should reach "Nutrabay Gold" entries.
    expect(findTrustifiedMatch("Nutrabay", "100% Whey Protein Isolate")).toMatchObject({
      brand: "Nutrabay Gold",
      productName: "100% Whey Protein Isolate",
      status: "Pass",
    })
    expect(findTrustifiedMatch("Nutrabay Gold", "100% Whey Protein Isolate")).toMatchObject({
      brand: "Nutrabay Gold",
      status: "Pass",
    })
  })

  it("keeps short brand names from matching longer unrelated ones", () => {
    // "run" is a character-level substring of "trunativ".
    expect(findTrustifiedMatch("RUN", "Muscle Whey")).toMatchObject({ brand: "RUN", testedDate: "2024-05-16" })
    expect(findTrustifiedMatch("Trunativ", "Whey Protein Pro Blend")).toMatchObject({
      brand: "Trunativ",
      testedDate: "2025-03-17",
    })
  })
})

describe("resolveTrustified", () => {
  // No real product currently triggers the fallback branch, so this fixture is what proves the
  // TrustifiedEntry -> TrustifiedResult conversion is correct before one ever does.
  const fixture = (overrides: Partial<Product> = {}): Product => ({
    id: "fixture",
    brand: "ESN",
    name: "Lean Whey",
    type: "Whey Isolate",
    packSizeG: 1000,
    priceINR: 2500,
    servingG: 30,
    proteinPerServingG: 24,
    sugarPerServingG: 1,
    flavor: "Chocolate",
    diet: "Non-Veg friendly",
    trustified: { status: "Not tested", testedBy: "", testedDate: "" },
    affiliateUrl: "#",
    notes: "",
    ...overrides,
  })

  it("fills an unchecked product from the database", () => {
    const source = trustifiedDatabase.find((e) => e.brand === "ESN" && e.productName === "Lean Whey")
    expect(source).toBeDefined()

    const resolved = resolveTrustified(fixture())
    expect(resolved.trustified).toEqual({
      status: "Fail",
      testedBy: "Eurofins",
      testedDate: "2025-08-17",
      reportUrl: source?.reportUrl,
    })
  })

  it("leaves every other field of the product untouched", () => {
    const input = fixture()
    const resolved = resolveTrustified(input)
    expect({ ...resolved, trustified: null }).toEqual({ ...input, trustified: null })
    expect(input.trustified.status).toBe("Not tested") // does not mutate its argument
  })

  it("does not overwrite a hand-entered result", () => {
    const handEntered = {
      status: "Pass",
      testedBy: "Someone Else",
      testedDate: "2020-01-01",
      reportUrl: "https://www.trustified.in/passandfail/hand-entered",
    } as const
    const resolved = resolveTrustified(fixture({ trustified: { ...handEntered } }))
    expect(resolved.trustified).toEqual(handEntered)
  })

  it("leaves a product alone when the database has no match", () => {
    const input = fixture({ brand: "Optimum Nutrition", name: "Gold Standard 100% Whey" })
    expect(resolveTrustified(input).trustified.status).toBe("Not tested")
  })
})

describe("findTrustifiedMatch — resolves the current catalogue", () => {
  const expected: Record<string, string | undefined> = {
    "muscleblaze-biozyme-performance": "Biozyme Performance Whey",
    "avvatar-100-performance-whey": "100% Performance Whey",
    "nutrabay-gold-whey-isolate": "100% Whey Protein Isolate",
    "whole-truth-cleanest-protein": "Cleanest Protein",
    "on-gold-standard": undefined,
    "yogabar-proclean-whey-isolate": "ProClean Whey Protein Isolate",
    "nakpro-gold-whey": "Whey Gold",
    "nutrabay-pea-protein-isolate": "Pea Protein Isolate",
    "myprotein-impact-plant": undefined,
    "muscleblaze-biozyme-clear-whey-isolate": undefined,
  }

  it.each(products.map((p) => [p.id, p.brand, p.name] as const))("%s", (id, brand, name) => {
    expect(findTrustifiedMatch(brand, name)?.productName).toBe(expected[id])
  })

  it("agrees with each product's hand-entered status where a match exists", () => {
    for (const product of products) {
      const match = findTrustifiedMatch(product.brand, product.name)
      if (match) {
        expect(match.status).toBe(product.trustified.status)
      } else {
        expect(product.trustified.status).toBe("Not tested")
      }
    }
  })
})
