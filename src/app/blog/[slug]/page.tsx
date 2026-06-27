import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/mdx";
import { ArticleHeader } from "@/components/blog/ArticleHeader";
import { MDXContent } from "@/components/blog/MDXContent";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

// Generate semua static routes saat build time
export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata dinamis per artikel
export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return { title: "Artikel tidak ditemukan" };

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    authors: [{ name: post.frontmatter.author }],
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: "article",
      publishedTime: post.frontmatter.date,
      authors: [post.frontmatter.author],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <ArticleHeader post={post} />

      {/* MDX Content */}
      <article>
        <MDXContent source={post.content} />
      </article>

      {/* Bottom Divider */}
      <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800">
        <p className="text-sm text-zinc-400 dark:text-zinc-600 text-center">
          Terima kasih sudah membaca 🙏
        </p>
      </div>
    </div>
  );
}