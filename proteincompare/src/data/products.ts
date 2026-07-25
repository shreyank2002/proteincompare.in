export type TrustifiedStatus = "Pass" | "Fail" | "Expired" | "Not tested"

export interface TrustifiedResult {
  status: TrustifiedStatus
  testedBy: string
  testedDate: string
  reportUrl?: string
}

export interface Product {
  id: string
  brand: string
  name: string
  type: "Whey Concentrate" | "Whey Isolate" | "Whey Blend" | "Clear Whey Isolate" | "Plant Protein" | "Mass Gainer" | "Creatine"
  packSizeG: number
  priceINR: number
  servingG: number
  proteinPerServingG: number
  sugarPerServingG: number
  flavor: string
  diet: "Veg" | "Non-Veg friendly"
  trustified: TrustifiedResult
  affiliateUrl: string
  notes: string
}

// Plain-English explainer for each category — what actually changes between them.
export const proteinTypeInfo: Record<Product["type"], string> = {
  "Whey Concentrate":
    "The least-filtered form of whey — roughly 70-80% protein by weight, with some lactose and fat left in, which is why it tastes creamier, costs less per gram, and can bother you if you're lactose-sensitive.",
  "Whey Isolate":
    "Whey filtered further to strip out most of the lactose, fat, and carbs, landing around 90% protein — thinner and less creamy than concentrate, easier on a sensitive gut, and noticeably more expensive per gram of protein.",
  "Whey Blend":
    "A mix of concentrate and isolate (sometimes with hydrolysate), which lets brands hit a price point between the two — check the label order, because most blends are mostly concentrate.",
  "Clear Whey Isolate":
    "Isolate treated to stay soluble in acidic liquid, so it mixes into a translucent fruit-juice-style drink instead of a milkshake — same fast digestion as regular isolate, no heavy milky mouthfeel, but usually a smaller 20g dose at the highest cost per gram of protein.",
  "Plant Protein":
    "Protein pulled from peas, rice, soy, or hemp — usually blended so the amino acid profile is complete, digests a bit slower, and has a grittier, earthier taste than whey.",
  "Mass Gainer":
    "Mostly carbohydrate with a modest amount of protein added, built for people who struggle to eat enough calories rather than for protein value — judge it on calories, not on cost per gram of protein.",
  Creatine:
    "Not a protein at all but a separate compound your muscles use for short, explosive effort — taken alongside protein, never as a replacement for it.",
}

// pricePerGramProtein = priceINR / (packSizeG / servingG) / proteinPerServingG
export function pricePerGramProtein(p: Product): number {
  const servingsPerPack = p.packSizeG / p.servingG
  const proteinPerPack = servingsPerPack * p.proteinPerServingG
  return p.priceINR / proteinPerPack
}

// Protein/price data: checked against Amazon.in / brand listings manually — revisit periodically.
// Trustified fields: sourced from https://www.trustified.in/proteinpowders (public pass/fail database).
export const products: Product[] = [
  {
    id: "muscleblaze-biozyme-performance",
    brand: "MuscleBlaze",
    name: "Biozyme Performance Whey Protein",
    type: "Whey Concentrate",
    packSizeG: 2000,
    priceINR: 4499,
    servingG: 34,
    proteinPerServingG: 25,
    sugarPerServingG: 2,
    flavor: "Rich Milk Chocolate",
    diet: "Non-Veg friendly",
    trustified: {
      status: "Pass",
      testedBy: "Eurofins",
      testedDate: "2023-03-27",
      reportUrl: "https://www.trustified.in/passandfail/biozyme-performance-whey",
    },
    affiliateUrl: "#",
    notes: "One of the most consistently Trustified-passed formulations from MuscleBlaze; digestive enzyme blend included.",
  },
  {
    id: "avvatar-100-performance-whey",
    brand: "Avvatar",
    name: "100% Performance Whey",
    type: "Whey Concentrate",
    packSizeG: 1000,
    priceINR: 2099,
    servingG: 32,
    proteinPerServingG: 24,
    sugarPerServingG: 1.5,
    flavor: "Cafe Mocha",
    diet: "Non-Veg friendly",
    trustified: {
      status: "Pass",
      testedBy: "Eurofins",
      testedDate: "2025-02-21",
      reportUrl: "https://www.trustified.in/passandfail/avvatarperformance100",
    },
    affiliateUrl: "#",
    notes: "Newer D2C brand with aggressive pricing; Trustified-passed on the batch tested Feb 2025.",
  },
  {
    id: "nutrabay-gold-whey-isolate",
    brand: "Nutrabay Gold",
    name: "100% Whey Protein Isolate",
    type: "Whey Isolate",
    packSizeG: 1000,
    priceINR: 3299,
    servingG: 30,
    proteinPerServingG: 25,
    sugarPerServingG: 0.5,
    flavor: "Rich Chocolate",
    diet: "Non-Veg friendly",
    trustified: {
      status: "Pass",
      testedBy: "Eurofins",
      testedDate: "2024-11-17",
      reportUrl: "https://www.trustified.in/passandfail/nutrabaygoldwheyprotein",
    },
    affiliateUrl: "#",
    notes: "True isolate profile, low sugar/carb; consistently passes Trustified batch testing.",
  },
  {
    id: "whole-truth-cleanest-protein",
    brand: "The Whole Truth",
    name: "Cleanest Whey Protein Concentrate, Unflavoured",
    type: "Whey Concentrate",
    packSizeG: 1000,
    priceINR: 3499,
    servingG: 34.6,
    proteinPerServingG: 26,
    sugarPerServingG: 0.5,
    flavor: "Unflavoured",
    diet: "Non-Veg friendly",
    trustified: {
      status: "Pass",
      testedBy: "Eurofins",
      testedDate: "2023-12-17",
      reportUrl: "https://www.trustified.in/passandfail/the-whole-truth",
    },
    affiliateUrl: "https://www.amazon.in/Whole-Truth-Concentrate-Unflavoured-Adulteration/dp/B0CLCLYJN1?tag=proteincomp05-21",
    notes: "\"Two ingredients\" positioning (whey + flavour); no added sugar, gums, or artificial sweeteners.",
  },
  {
    id: "on-gold-standard",
    brand: "Optimum Nutrition",
    name: "Gold Standard 100% Whey",
    type: "Whey Blend",
    packSizeG: 2270,
    priceINR: 6999,
    servingG: 30.4,
    proteinPerServingG: 24,
    sugarPerServingG: 1,
    flavor: "Double Rich Chocolate",
    diet: "Non-Veg friendly",
    trustified: {
      status: "Not tested",
      testedBy: "",
      testedDate: "",
    },
    affiliateUrl: "#",
    notes: "Blend of isolate/concentrate/peptides, not a pure isolate despite branding. Not in Trustified's public database as of writing.",
  },
  {
    id: "yogabar-proclean-whey-isolate",
    brand: "Yogabar",
    name: "ProClean Whey Protein Isolate",
    type: "Whey Isolate",
    packSizeG: 1000,
    priceINR: 2799,
    servingG: 30,
    proteinPerServingG: 25,
    sugarPerServingG: 1,
    flavor: "Chocolate",
    diet: "Non-Veg friendly",
    trustified: {
      status: "Expired",
      testedBy: "Eurofins",
      testedDate: "2025-04-23",
      reportUrl: "https://www.trustified.in/passandfail/yogabarcleanwhey",
    },
    affiliateUrl: "#",
    notes: "Passed when last tested, but that certification has since expired — worth rechecking before buying.",
  },
  {
    id: "nakpro-gold-whey",
    brand: "Nakpro",
    name: "Gold Whey Protein",
    type: "Whey Blend",
    packSizeG: 1000,
    priceINR: 2599,
    servingG: 33,
    proteinPerServingG: 25,
    sugarPerServingG: 1.5,
    flavor: "Belgian Chocolate",
    diet: "Non-Veg friendly",
    trustified: {
      status: "Pass",
      testedBy: "Eurofins",
      testedDate: "2023-07-23",
      reportUrl: "https://www.trustified.in/passandfail/nakpro-gold",
    },
    affiliateUrl: "#",
    notes: "Consistently Trustified-active brand across several of its whey SKUs.",
  },
  {
    id: "nutrabay-pea-protein-isolate",
    brand: "Nutrabay",
    name: "Pea Protein Isolate",
    type: "Plant Protein",
    packSizeG: 1000,
    priceINR: 1999,
    servingG: 32,
    proteinPerServingG: 22,
    sugarPerServingG: 0.5,
    flavor: "Unflavoured",
    diet: "Veg",
    trustified: {
      status: "Pass",
      testedBy: "Eurofins",
      testedDate: "2026-06-16",
      reportUrl: "https://www.trustified.in/passandfail/nutrabaypeaprotein",
    },
    affiliateUrl: "#",
    notes: "One of the few plant proteins with a recent (2026) Trustified pass — most competitors in this category aren't tested at all.",
  },
  {
    id: "myprotein-impact-plant",
    brand: "MyProtein",
    name: "Impact Plant Protein",
    type: "Plant Protein",
    packSizeG: 1000,
    priceINR: 3199,
    servingG: 30,
    proteinPerServingG: 21,
    sugarPerServingG: 0.5,
    flavor: "Chocolate Smooth",
    diet: "Veg",
    trustified: {
      status: "Not tested",
      testedBy: "",
      testedDate: "",
    },
    affiliateUrl: "#",
    notes: "UK import brand; pea/hemp/rice blend. Not in Trustified's India-market database (they primarily test India-sold domestic and D2C brands).",
  },
  {
    id: "muscleblaze-biozyme-clear-whey-isolate",
    brand: "MuscleBlaze",
    name: "Biozyme Clear Whey Isolate",
    type: "Clear Whey Isolate",
    packSizeG: 540,
    priceINR: 2179,
    servingG: 27,
    proteinPerServingG: 20,
    sugarPerServingG: 0,
    flavor: "Icy Orange",
    diet: "Non-Veg friendly",
    trustified: {
      status: "Not tested",
      testedBy: "",
      testedDate: "",
    },
    affiliateUrl: "#",
    notes: "Juice-style clear isolate, 92 kcal and no added sugar per 27g scoop — the priciest way to buy a gram of protein here, which is the trade-off for not drinking a milkshake. Trustified has no clear whey products in its public database as of writing.",
  },
]
