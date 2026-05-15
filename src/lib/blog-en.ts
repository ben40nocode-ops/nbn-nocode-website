import { articlesEN, type ArticleEN } from "@/content/blog/articles-en";
import { getAllBlogArticles, getBlogArticleBySlug } from "@/lib/airtable-blog";

export type { ArticleEN };

export async function getAllArticlesEN(): Promise<ArticleEN[]> {
  const airtableEN = await getAllBlogArticles("en").catch(() => []);
  const airtableSlugs = new Set(airtableEN.map((a) => a.slug));
  const filteredStatic = articlesEN.filter((a) => !airtableSlugs.has(a.slug));
  return [...airtableEN, ...filteredStatic].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getArticleENBySlug(slug: string): Promise<ArticleEN | undefined> {
  const fromAirtable = await getBlogArticleBySlug(slug).catch(() => null);
  if (fromAirtable && fromAirtable.lang === "en") return fromAirtable as ArticleEN;
  return articlesEN.find((a) => a.slug === slug);
}
