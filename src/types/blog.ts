export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  tags: string[];
  author: string;
  coverImage?: string;
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogFrontmatter;
  readingTime: string;
}

export interface BlogPostDetail extends BlogPost {
  content: string;
}