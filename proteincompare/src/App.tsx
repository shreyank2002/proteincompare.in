import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import BlogList from "./pages/BlogList"
import BlogPost from "./pages/BlogPost"
import FallingParticles from "./components/FallingParticles"
import ThemeToggle from "./components/ThemeToggle"
import { SITE_VERSION } from "./data/site"

export default function App() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <FallingParticles />
      <header className="border-b border-[var(--color-line)] relative z-10">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-[var(--font-display)] text-lg font-semibold text-[var(--color-ink)]">
            protein<span className="text-[var(--color-steel)]">compare</span>.in
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium text-[var(--color-ink-soft)]">
            <Link to="/#rankings" className="hover:text-[var(--color-ink)]">Top picks</Link>
            <Link to="/#compare" className="hover:text-[var(--color-ink)]">Compare</Link>
            <Link to="/blog" className="hover:text-[var(--color-ink)]">Blog</Link>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="flex-1 relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </main>

      <footer className="border-t border-[var(--color-line)] mt-12 relative z-10">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-8 text-xs text-[var(--color-ink-soft)] flex flex-col gap-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span>© {new Date().getFullYear()} proteincompare.in — independent comparisons, no brand pays for placement.</span>
            <span>
              As an Amazon Associate we earn from qualifying purchases. Lab-testing status sourced from{" "}
              <a href="https://www.trustified.in" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--color-ink)]">
                Trustified
              </a>
              , an independent Indian supplement testing lab, not affiliated with proteincompare.in.
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-[var(--font-data)] tracking-wide opacity-70">v{SITE_VERSION}</span>
            <span className="font-[var(--font-body)] inline-flex items-center gap-1.5">
              <span aria-hidden="true" className="w-1 h-1 rounded-full bg-[var(--color-value)]" />
              Built with care in Bengaluru, India
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
