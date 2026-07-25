import { Link } from "react-router-dom"
import { posts } from "../data/posts"

export default function BlogList() {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-6 py-16">
      <h1 className="font-[var(--font-display)] text-4xl font-semibold text-[var(--color-ink)] mb-8">
        All breakdowns
      </h1>
      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <Link
            to={`/blog/${post.slug}`}
            key={post.slug}
            className="block border-b border-[var(--color-line)] pb-6 hover:opacity-80 transition-opacity"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="font-[var(--font-data)] text-xs uppercase tracking-wide text-[var(--color-steel)]">
                {post.tag}
              </span>
              <span className="text-xs text-[var(--color-ink-soft)]">{post.date}</span>
            </div>
            <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[var(--color-ink)] mb-1">
              {post.title}
            </h2>
            <p className="text-[var(--color-ink-soft)]">{post.dek}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
