import Link from "next/link";
import { PenLine } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
      <nav className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/blog"
          className="flex items-center gap-2.5 font-semibold text-zinc-900 dark:text-zinc-100 hover:opacity-80 transition-opacity"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600 text-white">
            <PenLine size={16} />
          </span>
          <span>DevNotes</span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6">
          <Link
            href="/blog"
            className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            Artikel
          </Link>
          <a
            href="https://github.com/Mucaru"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}