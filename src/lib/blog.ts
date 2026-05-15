import { articles as staticArticles, type Article } from "@/content/blog/articles";
import { getAllBlogArticles, getBlogArticleBySlug } from "@/lib/airtable-blog";

export type { Article };

export async function getAllArticles(): Promise<Article[]> {
  const airtable = await getAllBlogArticles("fr").catch(() => []);
  const airtableSlugs = new Set(airtable.map((a) => a.slug));
  const filtered = staticArticles.filter((a) => !airtableSlugs.has(a.slug));
  return [...airtable, ...filtered].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  const fromAirtable = await getBlogArticleBySlug(slug).catch(() => null);
  if (fromAirtable) return fromAirtable;
  return staticArticles.find((a) => a.slug === slug);
}
