interface Props {
  value: number   // price per gram of protein, INR
  min: number
  max: number
}

// Signature element: a horizontal filled bar showing where a product's
// cost-per-gram-of-protein sits against the cheapest/priciest in view.
// Lower price-per-gram = shorter fill = better value, filled in "value" gold.
export default function ValueGauge({ value, min, max }: Props) {
  const range = Math.max(max - min, 0.01)
  const pct = Math.min(100, Math.max(4, ((value - min) / range) * 100))
  const isBest = value === min

  return (
    <div className="flex items-center gap-2 w-full min-w-[120px]">
      <div className="relative h-2 flex-1 bg-[var(--color-paper-dim)] rounded-full overflow-hidden border border-[var(--color-line)]">
        <div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            width: `${pct}%`,
            background: isBest ? "var(--color-value)" : "var(--color-steel)",
          }}
        />
      </div>
      <span className="font-[var(--font-data)] text-xs tabular-nums text-[var(--color-ink-soft)] whitespace-nowrap">
        ₹{value.toFixed(1)}/g
      </span>
    </div>
  )
}
