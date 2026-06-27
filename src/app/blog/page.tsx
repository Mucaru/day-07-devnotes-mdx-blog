import type { Metadata } from "next";
import { getAllPosts } from "@/lib/mdx";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { PenLine } from "lucide-react";

export const metadata: Metadata = {
  title: "Semua Artikel",
  description:
    "Kumpulan tulisan tentang web development, Next.js, TypeScript, dan teknologi modern lainnya.",
};

export default function BlogListPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Page Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-3">
          <PenLine size={14} />
          <span>100 Days 100 Web Apps — Day 07</span>
        </div>
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight mb-4">
          DevNotes
        </h1>
        <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xl">
          Catatan perjalanan belajar web development. Dari konsep dasar hingga
          arsitektur yang scalable.
        </p>
      </div>

      {/* Article Count */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          {posts.length} artikel
        </span>
        <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800" />
      </div>

      {/* Article Grid */}
      {posts.length === 0 ? (
        <div className="text-center py-20 text-zinc-400 dark:text-zinc-600">
          <PenLine size={40} className="mx-auto mb-4 opacity-40" />
          <p className="text-sm">Belum ada artikel. Mulai menulis!</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}