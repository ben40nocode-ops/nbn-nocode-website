import { articlesEN, type ArticleEN } from "@/content/blog/articles-en";

export type { ArticleEN };

// Blog 100 % statique : les articles EN sont bundlés dans le code (src/content/blog/articles-en.ts).
// Aucun appel Airtable — la publication se fait en ajoutant l'article ici puis en déployant.

export async function getAllArticlesEN(): Promise<ArticleEN[]> {
  return [...articlesEN].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getArticleENBySlug(slug: string): Promise<ArticleEN | undefined> {
  return articlesEN.find((a) => a.slug === slug);
}
