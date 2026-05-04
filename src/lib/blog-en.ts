import { articlesEN, type ArticleEN } from "@/content/blog/articles-en";
export type { ArticleEN };
export async function getAllArticlesEN(): Promise<ArticleEN[]> {
  return [...articlesEN].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
export async function getArticleENBySlug(slug: string): Promise<ArticleEN | undefined> {
  return articlesEN.find((a) => a.slug === slug);
}
