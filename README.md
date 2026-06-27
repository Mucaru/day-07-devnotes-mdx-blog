# 📝 DevNotes — Static MDX Blog

![Next.js](https://img.shields.io/badge/Next.js_16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![MDX](https://img.shields.io/badge/MDX-1B1F24?style=flat-square&logo=mdx&logoColor=white)
![Shiki](https://img.shields.io/badge/Shiki-Syntax_Highlight-8B5CF6?style=flat-square)
![Vercel](https://img.shields.io/badge/Deployed_on_Vercel-000?style=flat-square&logo=vercel)
![Day](https://img.shields.io/badge/100_Days_Challenge-Day_07-orange?style=flat-square)

> Blog statis berbasis MDX dengan syntax highlighting kelas dunia, reading time estimasi, dan SEO metadata dinamis per artikel.

## ✨ Fitur

- 📄 Artikel ditulis dalam **MDX** — Markdown + React component support
- 🎨 Syntax highlighting dengan **rehype-pretty-code + Shiki** (theme github-dark-dimmed)
- ⏱️ Estimasi **reading time** otomatis per artikel
- 🔍 **SEO metadata dinamis** via `generateMetadata` per halaman
- ⚡ **Static generation** dengan `generateStaticParams` — zero runtime overhead
- 🏷️ Tag/kategori per artikel dengan Badge component
- 📱 Fully responsive — mobile hingga desktop
- 🔗 Heading anchor links via `rehype-autolink-headings`
- 🚫 Custom 404 page

## 🛠️ Tech Stack

| Teknologi | Kegunaan |
|---|---|
| Next.js 16 (App Router) | Framework utama |
| TypeScript | Type safety & kontrak data |
| Tailwind CSS v4 | Styling dengan CSS custom properties |
| MDX + next-mdx-remote | Konten artikel dengan React component support |
| rehype-pretty-code | Syntax highlighting engine |
| Shiki | Tokenizer & theme untuk code blocks |
| remark-gfm | GitHub Flavored Markdown support |
| rehype-slug | Auto ID pada setiap heading |
| rehype-autolink-headings | Anchor link pada heading |
| gray-matter | Parse frontmatter YAML dari file MDX |
| reading-time | Estimasi waktu baca per artikel |
| date-fns | Format tanggal artikel |
| Vercel | Deployment |

## 📁 Struktur Folder

```
src/
├── app/
│   ├── layout.tsx               # Root layout + metadata global + Google Fonts
│   ├── page.tsx                 # Root page — redirect ke /blog
│   ├── not-found.tsx            # Custom 404 page
│   ├── globals.css              # Design tokens, prose overrides, syntax highlight styles
│   └── blog/
│       ├── page.tsx             # List semua artikel (sorted by date)
│       └── [slug]/
│           └── page.tsx         # Detail artikel + generateMetadata + generateStaticParams
│
├── components/
│   ├── ui/
│   │   ├── Badge.tsx            # Tag/kategori pill component
│   │   └── BackButton.tsx       # Client component — router.back()
│   ├── blog/
│   │   ├── ArticleCard.tsx      # Card artikel di halaman list
│   │   ├── ArticleHeader.tsx    # Header detail artikel (title, meta, tags)
│   │   └── MDXContent.tsx       # MDXRemote wrapper dengan semua rehype/remark plugins
│   └── layout/
│       ├── Navbar.tsx           # Sticky navbar dengan backdrop blur
│       └── Footer.tsx           # Footer dengan info challenge
│
├── lib/
│   ├── mdx.ts                   # Core MDX utilities: getAllSlugs, getAllPosts, getPostBySlug
│   └── utils.ts                 # cn() helper + formatDate
│
├── types/
│   └── blog.ts                  # BlogFrontmatter, BlogPost, BlogPostDetail interfaces
│
└── content/
    └── blog/
        ├── hello-world.mdx
        ├── nextjs-15-tips.mdx
        └── tailwind-v4-guide.mdx
```

## 🚀 Jalankan Lokal

```bash
git clone https://github.com/Mucaru/day-07-devnotes-mdx-blog.git
cd day-07-devnotes-mdx-blog
npm install
npm run dev
```

Buka `http://localhost:3000`

## ✍️ Cara Tambah Artikel Baru

1. Buat file baru di `src/content/blog/nama-artikel.mdx`
2. Tambahkan frontmatter di bagian atas:

```mdx
---
title: "Judul Artikel"
description: "Deskripsi singkat artikel."
date: "2025-02-01"
tags: ["tag1", "tag2"]
author: "Mucaru"
---

Konten artikel dalam Markdown...
```

3. Artikel otomatis muncul di halaman list, sorted by date terbaru.

## 🌐 Live Demo

**[day-07-devnotes-mdx-blog.vercel.app](https://day-07-devnotes-mdx-blog.vercel.app)**

---

Bagian dari tantangan [100 Hari 100 Web App](https://github.com/Mucaru) · Day 07 of 100