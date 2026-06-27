import Link from "next/link";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-32 text-center">
      <FileQuestion
        size={48}
        className="mx-auto mb-6 text-zinc-300 dark:text-zinc-700"
      />
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
        Halaman tidak ditemukan
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400 mb-8">
        Artikel yang kamu cari tidak ada atau sudah dipindahkan.
      </p>
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors"
      >
        Kembali ke Blog
      </Link>
    </div>
  );
}