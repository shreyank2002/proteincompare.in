import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import BlogList from "./pages/BlogList"
import BlogPost from "./pages/BlogPost"

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-[var(--color-line)]">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-[var(--font-display)] text-lg font-semibold text-[var(--color-ink)]">
            protein<span className="text-[var(--color-steel)]">compare</span>.in
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium text-[var(--color-ink-soft)]">
            <Link to="/#compare" className="hover:text-[var(--color-ink)]">Compare</Link>
            <Link to="/blog" className="hover:text-[var(--color-ink)]">Blog</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </main>

      <footer className="border-t border-[var(--color-line)] mt-12">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-8 text-xs text-[var(--color-ink-soft)] flex flex-wrap items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} proteincompare.in — independent comparisons, no brand pays for placement.</span>
          <span>
            As an Amazon Associate we earn from qualifying purchases. Lab-testing status sourced from{" "}
            <a href="https://www.trustified.in" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--color-ink)]">
              Trustified
            </a>
            , an independent Indian supplement testing lab, not affiliated with proteincompare.in.
          </span>
        </div>
      </footer>
    </div>
  )
}
