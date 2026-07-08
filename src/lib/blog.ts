import { articles as staticArticles, type Article } from "@/content/blog/articles";

export type { Article };

// Blog 100 % statique : les articles sont bundlés dans le code (src/content/blog/articles.ts).
// Aucun appel Airtable — la publication se fait en ajoutant l'article ici puis en déployant.

export async function getAllArticles(): Promise<Article[]> {
  return [...staticArticles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  return staticArticles.find((a) => a.slug === slug);
}
