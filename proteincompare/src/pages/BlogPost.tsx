import { Link, useParams } from "react-router-dom"
import { posts } from "../data/posts"

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <p className="text-[var(--color-ink-soft)]">Post not found.</p>
        <Link to="/blog" className="text-[var(--color-steel)] hover:underline">Back to all posts</Link>
      </div>
    )
  }

  return (
    <article className="max-w-2xl mx-auto px-4 md:px-6 py-16">
      <Link to="/blog" className="text-sm text-[var(--color-steel)] hover:underline">← All breakdowns</Link>
      <div className="flex items-center gap-3 mt-6 mb-3">
        <span className="font-[var(--font-data)] text-xs uppercase tracking-wide text-[var(--color-steel)]">
          {post.tag}
        </span>
        <span className="text-xs text-[var(--color-ink-soft)]">{post.date}</span>
      </div>
      <h1 className="font-[var(--font-display)] text-3xl md:text-4xl font-semibold text-[var(--color-ink)] mb-6 leading-tight">
        {post.title}
      </h1>
      <div className="flex flex-col gap-4">
        {post.body.map((para, i) => (
          <p key={i} className="text-[var(--color-ink-soft)] leading-relaxed font-[var(--font-body)] text-lg">
            {para}
          </p>
        ))}
      </div>
    </article>
  )
}
