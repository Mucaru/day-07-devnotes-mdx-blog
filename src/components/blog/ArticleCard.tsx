import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/types/blog";

interface ArticleCardProps {
  post: BlogPost;
}

export function ArticleCard({ post }: ArticleCardProps) {
  const { slug, frontmatter, readingTime } = post;

  return (
    <article className="group relative flex flex-col gap-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-md hover:shadow-indigo-500/5 transition-all duration-300">
      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {frontmatter.tags.map((tag) => (
          <Badge key={tag} label={tag} />
        ))}
      </div>

      {/* Title */}
      <Link href={`/blog/${slug}`} className="block">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200 leading-snug">
          {frontmatter.title}
        </h2>
      </Link>

      {/* Description */}
      <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2">
        {frontmatter.description}
      </p>

      {/* Meta */}
      <div className="flex items-center gap-4 pt-1 text-xs text-zinc-400 dark:text-zinc-500">
        <span className="flex items-center gap-1.5">
          <Calendar size={12} />
          {formatDate(frontmatter.date)}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock size={12} />
          {readingTime}
        </span>
      </div>

      {/* Subtle arrow indicator */}
      <Link
        href={`/blog/${slug}`}
        className="absolute inset-0 rounded-xl"
        aria-label={`Baca artikel: ${frontmatter.title}`}
      />
    </article>
  );
}