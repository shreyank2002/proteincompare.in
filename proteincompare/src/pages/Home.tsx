import CompareTable from "../components/CompareTable"
import Rankings from "../components/Rankings"
import { products, pricePerGramProtein } from "../data/products"
import { posts } from "../data/posts"
import { Link } from "react-router-dom"

export default function Home() {
  const cheapest = [...products].sort((a, b) => pricePerGramProtein(a) - pricePerGramProtein(b))[0]
  const cheapestPpg = pricePerGramProtein(cheapest)

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6">
      {/* Hero: the signature gauge, scaled up, standing in for the whole site's thesis */}
      <section className="pt-16 pb-14 md:pt-24 md:pb-20">
        <p className="font-[var(--font-data)] text-xs uppercase tracking-[0.2em] text-[var(--color-steel)] mb-4">
          Protein Compare · India
        </p>
        <h1 className="font-[var(--font-display)] text-4xl md:text-6xl font-semibold leading-[1.05] text-[var(--color-ink)] max-w-3xl">
          The label says protein.
          <br />
          <span className="text-[var(--color-steel)]">The price tag hides the math.</span>
        </h1>
        <p className="font-[var(--font-body)] text-lg text-[var(--color-ink-soft)] mt-6 max-w-xl">
          We compare Indian supplements the way a nutritionist with a calculator would —
          on cost per gram of protein, not marketing claims.
        </p>

        <div className="mt-10 flex items-center gap-4 flex-wrap">
          <a
            href="#compare"
            className="inline-flex items-center gap-2 bg-[var(--color-ink)] text-[var(--color-paper)] px-5 py-3 rounded-md font-medium hover:bg-[var(--color-steel)] transition-colors"
          >
            See the full comparison
          </a>
          <div className="font-[var(--font-data)] text-sm text-[var(--color-ink-soft)]">
            Right now, cheapest is{" "}
            <span className="text-[var(--color-value)] font-medium">{cheapest.brand}</span> at{" "}
            <span className="text-[var(--color-ink)]">₹{cheapestPpg.toFixed(1)}/g protein</span>
          </div>
        </div>
      </section>

      <div id="rankings" className="pb-20 scroll-mt-20">
        <Rankings />
      </div>

      <div className="pb-20">
        <CompareTable />
      </div>

      {/* Blog preview */}
      <section className="pb-24">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="font-[var(--font-display)] text-2xl md:text-3xl font-semibold text-[var(--color-ink)]">
            Latest breakdowns
          </h2>
          <Link to="/blog" className="text-sm text-[var(--color-steel)] hover:underline font-medium">
            All posts →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Link
              to={`/blog/${post.slug}`}
              key={post.slug}
              className="block border border-[var(--color-line)] rounded-lg p-5 bg-white/40 hover:bg-white/70 transition-colors"
            >
              <span className="font-[var(--font-data)] text-xs uppercase tracking-wide text-[var(--color-steel)]">
                {post.tag}
              </span>
              <h3 className="font-[var(--font-display)] text-xl font-semibold mt-2 mb-2 text-[var(--color-ink)]">
                {post.title}
              </h3>
              <p className="text-sm text-[var(--color-ink-soft)]">{post.dek}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
