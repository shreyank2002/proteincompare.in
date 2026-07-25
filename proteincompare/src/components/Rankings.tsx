import { products, pricePerGramProtein, type Product } from "../data/products"

interface RankedEntry {
  product: Product
  metric: string
}

function topByValue(n: number): RankedEntry[] {
  return [...products]
    .sort((a, b) => pricePerGramProtein(a) - pricePerGramProtein(b))
    .slice(0, n)
    .map((p) => ({ product: p, metric: `₹${pricePerGramProtein(p).toFixed(1)}/g` }))
}

function topByProtein(n: number): RankedEntry[] {
  return [...products]
    .sort((a, b) => b.proteinPerServingG - a.proteinPerServingG)
    .slice(0, n)
    .map((p) => ({ product: p, metric: `${p.proteinPerServingG}g/scoop` }))
}

function topTrustified(n: number): RankedEntry[] {
  return products
    .filter((p) => p.trustified.status === "Pass")
    .sort((a, b) => pricePerGramProtein(a) - pricePerGramProtein(b))
    .slice(0, n)
    .map((p) => ({ product: p, metric: `Passed ${p.trustified.testedDate.slice(0, 4)}` }))
}

function Leaderboard({
  title,
  eyebrow,
  entries,
  accent,
}: {
  title: string
  eyebrow: string
  entries: RankedEntry[]
  accent: string
}) {
  return (
    <div className="flex-1 min-w-[260px] border border-[var(--color-line)] rounded-lg bg-[var(--color-paper)]/80 backdrop-blur-sm p-5">
      <p className="font-[var(--font-data)] text-xs uppercase tracking-widest mb-1" style={{ color: accent }}>
        {eyebrow}
      </p>
      <h3 className="font-[var(--font-display)] text-lg font-semibold text-[var(--color-ink)] mb-4">{title}</h3>
      <ol className="flex flex-col gap-3">
        {entries.map((e, i) => (
          <li key={e.product.id} className="flex items-center gap-3">
            <span
              className="flex items-center justify-center w-6 h-6 rounded-full text-xs font-[var(--font-data)] font-medium shrink-0"
              style={{
                background: i === 0 ? accent : "var(--color-paper-dim)",
                color: i === 0 ? "var(--color-paper)" : "var(--color-ink-soft)",
              }}
            >
              {i + 1}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-[var(--color-ink)] truncate">{e.product.brand}</p>
              <p className="text-xs text-[var(--color-ink-soft)] truncate">{e.product.name}</p>
            </div>
            <span className="font-[var(--font-data)] text-xs tabular-nums shrink-0" style={{ color: accent }}>
              {e.metric}
            </span>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default function Rankings() {
  return (
    <section className="w-full">
      <div className="mb-6">
        <p className="font-[var(--font-data)] text-xs uppercase tracking-widest text-[var(--color-steel)] mb-1">
          Top picks right now
        </p>
        <h2 className="font-[var(--font-display)] text-2xl md:text-3xl font-semibold text-[var(--color-ink)]">
          Ranked three ways
        </h2>
        <p className="text-sm text-[var(--color-ink-soft)] mt-1 max-w-2xl">
          Value, protein density, and lab-verified quality rarely point to the same product — so we rank all three separately instead of blending them into one score.
        </p>
      </div>
      <div className="flex flex-wrap gap-5">
        <Leaderboard title="Best value" eyebrow="Lowest ₹ per gram of protein" entries={topByValue(3)} accent="var(--color-value)" />
        <Leaderboard title="Most protein" eyebrow="Highest protein per scoop" entries={topByProtein(3)} accent="var(--color-steel)" />
        <Leaderboard title="Lab-verified" eyebrow="Trustified-passed, cheapest first" entries={topTrustified(3)} accent="var(--color-sage)" />
      </div>
    </section>
  )
}
