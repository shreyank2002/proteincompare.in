// Ambient background: protein scoops and capsules drifting slowly downward.
// Deliberately sparse and low-opacity — atmosphere for a data-heavy page, not a spectacle.

const Scoop = ({ size, color }: { size: number; color: string }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    <path
      d="M8 16 C8 10 13 6 20 6 C27 6 32 10 32 16 L30 32 C30 34.2 27 36 20 36 C13 36 10 34.2 10 32 Z"
      fill={color}
    />
    <ellipse cx="20" cy="16" rx="12" ry="4" fill={color} opacity="0.6" />
  </svg>
)

const Capsule = ({ size, color }: { size: number; color: string }) => (
  <svg width={size} height={size * 0.5} viewBox="0 0 40 20" fill="none">
    <rect x="1" y="1" width="38" height="18" rx="9" fill={color} opacity="0.85" />
    <rect x="1" y="1" width="19" height="18" rx="9" fill={color} />
  </svg>
)

interface ParticleConfig {
  left: string
  size: number
  duration: number
  delay: number
  rotate: number
  opacity: number
  kind: "scoop" | "capsule"
  colorVar: string
}

const particles: ParticleConfig[] = [
  { left: "4%", size: 34, duration: 26, delay: -3, rotate: 50, opacity: 0.10, kind: "scoop", colorVar: "var(--color-steel)" },
  { left: "13%", size: 20, duration: 19, delay: -9, rotate: -70, opacity: 0.12, kind: "capsule", colorVar: "var(--color-value)" },
  { left: "24%", size: 28, duration: 31, delay: -14, rotate: 30, opacity: 0.08, kind: "scoop", colorVar: "var(--color-sage)" },
  { left: "35%", size: 18, duration: 22, delay: -1, rotate: 90, opacity: 0.10, kind: "capsule", colorVar: "var(--color-steel)" },
  { left: "47%", size: 30, duration: 28, delay: -20, rotate: -40, opacity: 0.09, kind: "scoop", colorVar: "var(--color-value)" },
  { left: "58%", size: 22, duration: 24, delay: -8, rotate: 60, opacity: 0.11, kind: "capsule", colorVar: "var(--color-sage)" },
  { left: "68%", size: 26, duration: 33, delay: -17, rotate: -30, opacity: 0.08, kind: "scoop", colorVar: "var(--color-steel)" },
  { left: "79%", size: 20, duration: 20, delay: -5, rotate: 80, opacity: 0.12, kind: "capsule", colorVar: "var(--color-value)" },
  { left: "89%", size: 32, duration: 29, delay: -12, rotate: -55, opacity: 0.09, kind: "scoop", colorVar: "var(--color-sage)" },
  { left: "95%", size: 16, duration: 18, delay: -2, rotate: 45, opacity: 0.10, kind: "capsule", colorVar: "var(--color-steel)" },
]

export default function FallingParticles() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
      {particles.map((p, i) => (
        <div
          key={i}
          className="falling-particle"
          style={{
            left: p.left,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            // @ts-expect-error custom properties
            "--particle-rotate": `${p.rotate}deg`,
            "--particle-opacity": p.opacity,
          }}
        >
          {p.kind === "scoop" ? <Scoop size={p.size} color={p.colorVar} /> : <Capsule size={p.size} color={p.colorVar} />}
        </div>
      ))}
    </div>
  )
}
