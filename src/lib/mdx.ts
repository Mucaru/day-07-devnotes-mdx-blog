import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { BlogPost, BlogPostDetail, BlogFrontmatter } from "@/types/blog";

const CONTENT_DIR = path.join(process.cwd(), "src/content/blog");

/**
 * Get all MDX file slugs from the content directory.
 */
export function getAllSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

/**
 * Get metadata for all blog posts, sorted by date descending.
 */
export function getAllPosts(): BlogPost[] {
  const slugs = getAllSlugs();

  const posts = slugs.map((slug) => {
    const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    const frontmatter = data as BlogFrontmatter;
    const { text: readingTimeText } = readingTime(content);

    return {
      slug,
      frontmatter,
      readingTime: readingTimeText,
    };
  });

  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );
}

/**
 * Get a single post's full content and metadata by slug.
 */
export function getPostBySlug(slug: string): BlogPostDetail | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const frontmatter = data as BlogFrontmatter;
  const { text: readingTimeText } = readingTime(content);

  return {
    slug,
    frontmatter,
    readingTime: readingTimeText,
    content,
  };
}