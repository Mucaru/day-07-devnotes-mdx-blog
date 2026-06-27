import { Calendar, Clock, User } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { BackButton } from "@/components/ui/BackButton";
import { formatDate } from "@/lib/utils";
import type { BlogPostDetail } from "@/types/blog";

interface ArticleHeaderProps {
  post: BlogPostDetail;
}

export function ArticleHeader({ post }: ArticleHeaderProps) {
  const { frontmatter, readingTime } = post;

  return (
    <header className="mb-10 space-y-6">
      <BackButton />

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {frontmatter.tags.map((tag) => (
          <Badge key={tag} label={tag} />
        ))}
      </div>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100 leading-tight tracking-tight">
        {frontmatter.title}
      </h1>

      {/* Description */}
      <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
        {frontmatter.description}
      </p>

      {/* Divider */}
      <div className="border-t border-zinc-200 dark:border-zinc-800 pt-5">
        <div className="flex flex-wrap items-center gap-5 text-sm text-zinc-500 dark:text-zinc-400">
          <span className="flex items-center gap-2">
            <User size={14} />
            {frontmatter.author}
          </span>
          <span className="flex items-center gap-2">
            <Calendar size={14} />
            {formatDate(frontmatter.date)}
          </span>
          <span className="flex items-center gap-2">
            <Clock size={14} />
            {readingTime}
          </span>
        </div>
      </div>
    </header>
  );
}