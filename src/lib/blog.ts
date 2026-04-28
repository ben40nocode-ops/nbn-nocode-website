import { articles, type Article } from "@/content/blog/articles";

export type { Article };

export async function getAllArticles(): Promise<Article[]> {
  return [...articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  return articles.find((a) => a.slug === slug);
}
