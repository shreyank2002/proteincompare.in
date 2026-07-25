import { useMemo, useState } from "react"
import { products, pricePerGramProtein, type Product, type TrustifiedResult } from "../data/products"
import ValueGauge from "./ValueGauge"

function TrustifiedBadge({ result }: { result: TrustifiedResult }) {
  const styles: Record<TrustifiedResult["status"], { color: string; label: string }> = {
    Pass: { color: "var(--color-sage)", label: "✓ Passed" },
    Fail: { color: "var(--color-coral)", label: "✕ Failed" },
    Expired: { color: "var(--color-value)", label: "⚠ Expired" },
    "Not tested": { color: "var(--color-ink-soft)", label: "Not tested" },
  }
  const s = styles[result.status]
  if (result.status === "Not tested") {
    return <span style={{ color: s.color }}>{s.label}</span>
  }
  return (
    <a
      href={result.reportUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
      style={{ color: s.color }}
      title={`Tested by ${result.testedBy} on ${result.testedDate}`}
    >
      {s.label}
    </a>
  )
}

type DietFilter = "All" | Product["diet"]
type TypeFilter = "All" | Product["type"]
type SortKey = "value" | "protein" | "price"

export default function CompareTable() {
  const [diet, setDiet] = useState<DietFilter>("All")
  const [type, setType] = useState<TypeFilter>("All")
  const [sort, setSort] = useState<SortKey>("value")
  const [trustedOnly, setTrustedOnly] = useState(false)

  const rows = useMemo(() => {
    let list = products.map((p) => ({ p, ppg: pricePerGramProtein(p) }))
    if (diet !== "All") list = list.filter((r) => r.p.diet === diet)
    if (type !== "All") list = list.filter((r) => r.p.type === type)
    if (trustedOnly) list = list.filter((r) => r.p.trustified.status === "Pass")
    if (sort === "value") list.sort((a, b) => a.ppg - b.ppg)
    if (sort === "protein") list.sort((a, b) => b.p.proteinPerServingG - a.p.proteinPerServingG)
    if (sort === "price") list.sort((a, b) => a.p.priceINR - b.p.priceINR)
    return list
  }, [diet, type, sort])

  const ppgValues = rows.map((r) => r.ppg)
  const min = Math.min(...ppgValues)
  const max = Math.max(...ppgValues)

  const types: TypeFilter[] = ["All", "Whey Concentrate", "Whey Isolate", "Whey Blend", "Plant Protein"]
  const diets: DietFilter[] = ["All", "Veg", "Non-Veg friendly"]

  return (
    <section id="compare" className="w-full">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-5">
        <div>
          <p className="font-[var(--font-data)] text-xs uppercase tracking-widest text-[var(--color-steel)] mb-1">
            Live comparison
          </p>
          <h2 className="font-[var(--font-display)] text-2xl md:text-3xl font-semibold text-[var(--color-ink)]">
            Cost per gram of protein
          </h2>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <label className="flex items-center gap-1.5 text-xs text-[var(--color-ink-soft)] font-[var(--font-data)] uppercase tracking-wide cursor-pointer select-none">
            <input
              type="checkbox"
              checked={trustedOnly}
              onChange={(e) => setTrustedOnly(e.target.checked)}
              className="accent-[var(--color-sage)]"
            />
            Trustified-passed only
          </label>
          <FilterGroup label="Type" value={type} options={types} onChange={(v) => setType(v as TypeFilter)} />
          <FilterGroup label="Diet" value={diet} options={diets} onChange={(v) => setDiet(v as DietFilter)} />
          <FilterGroup
            label="Sort"
            value={sort}
            options={["value", "protein", "price"]}
            labels={{ value: "Best value", protein: "Most protein", price: "Lowest price" }}
            onChange={(v) => setSort(v as SortKey)}
          />
        </div>
      </div>

      <div className="overflow-x-auto border border-[var(--color-line)] rounded-lg bg-white/40">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[var(--color-line)] text-left">
              <Th>Product</Th>
              <Th>Type</Th>
              <Th className="text-right">Protein/serving</Th>
              <Th className="text-right">Sugar/serving</Th>
              <Th>Value (₹ per g protein)</Th>
              <Th>Diet</Th>
              <Th>Trustified</Th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({ p, ppg }) => (
              <tr key={p.id} className="border-b border-[var(--color-line)] last:border-0 hover:bg-[var(--color-paper-dim)]/50 transition-colors">
                <td className="py-3 px-3">
                  <div className="font-medium text-[var(--color-ink)]">{p.brand}</div>
                  <div className="text-[var(--color-ink-soft)] text-xs">{p.name}</div>
                </td>
                <td className="py-3 px-3 text-[var(--color-ink-soft)] text-xs">{p.type}</td>
                <td className="py-3 px-3 text-right font-[var(--font-data)] tabular-nums">{p.proteinPerServingG}g</td>
                <td className="py-3 px-3 text-right font-[var(--font-data)] tabular-nums">{p.sugarPerServingG}g</td>
                <td className="py-3 px-3 min-w-[160px]">
                  <ValueGauge value={ppg} min={min} max={max} />
                </td>
                <td className="py-3 px-3">
                  <span
                    className="text-xs px-2 py-0.5 rounded-full border"
                    style={
                      p.diet === "Veg"
                        ? { color: "var(--color-sage)", borderColor: "var(--color-sage)" }
                        : { color: "var(--color-ink-soft)", borderColor: "var(--color-line)" }
                    }
                  >
                    {p.diet}
                  </span>
                </td>
                <td className="py-3 px-3 text-xs">
                  <TrustifiedBadge result={p.trustified} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-[var(--color-ink-soft)] mt-3">
        Value is computed as pack price ÷ total protein grams in the pack — the number that actually
        matters more than sticker price. Gold bar = cheapest per gram of protein in the current view.
      </p>
    </section>
  )
}

function FilterGroup<T extends string>({
  label,
  value,
  options,
  labels,
  onChange,
}: {
  label: string
  value: T
  options: T[]
  labels?: Record<string, string>
  onChange: (v: T) => void
}) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-xs text-[var(--color-ink-soft)] font-[var(--font-data)] uppercase tracking-wide">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
        className="text-xs border border-[var(--color-line)] rounded-md px-2 py-1 bg-white text-[var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-steel)]"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {labels?.[o] ?? o}
          </option>
        ))}
      </select>
    </div>
  )
}

function Th({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <th className={`py-2.5 px-3 font-[var(--font-data)] text-xs uppercase tracking-wide text-[var(--color-ink-soft)] font-medium ${className}`}>
      {children}
    </th>
  )
}
