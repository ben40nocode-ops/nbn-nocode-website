import Airtable from "airtable";

// requestTimeout évite que le build Next.js reste bloqué sur "Collecting page data"
// si Airtable ne répond pas : la requête échoue vite et les .catch(() => []) prennent le relais.
const base = new Airtable({
  apiKey: process.env.AIRTABLE_PAT!,
  requestTimeout: 15000,
}).base(process.env.AIRTABLE_BASE_ID!);

const blogTable = () => base(process.env.AIRTABLE_BLOG_TABLE_ID!);

// Pendant `next build`, on n'appelle JAMAIS Airtable : le build pré-rend les pages
// avec les articles statiques bundlés, et les articles Airtable sont récupérés au
// runtime (ISR revalidate). Évite tout blocage/échec de build lié à Airtable.
const IS_BUILD = process.env.NEXT_PHASE === "phase-production-build";

export interface BlogArticle {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  keywords: string[];
  readingTime: string;
  content: string;
  lang: "fr" | "en";
}

function parseRecord(r: Airtable.Record<Airtable.FieldSet>): BlogArticle {
  return {
    slug: r.fields.slug as string,
    title: r.fields.title as string,
    description: r.fields.description as string,
    date: r.fields.date as string,
    author: r.fields.author as string,
    category: r.fields.category as string,
    keywords: ((r.fields.keywords as string) ?? "").split(",").map((k) => k.trim()).filter(Boolean),
    readingTime: r.fields.readingTime as string,
    content: r.fields.content as string,
    lang: r.fields.lang as "fr" | "en",
  };
}

export async function saveBlogArticle(article: BlogArticle) {
  return blogTable().create({
    slug: article.slug,
    title: article.title,
    description: article.description,
    date: article.date,
    author: article.author,
    category: article.category,
    keywords: article.keywords.join(", "),
    readingTime: article.readingTime,
    content: article.content,
    lang: article.lang,
    published: true,
  });
}

export async function getAllBlogArticles(lang: "fr" | "en"): Promise<BlogArticle[]> {
  if (IS_BUILD) return [];
  const records = await blogTable()
    .select({
      filterByFormula: `{lang} = "${lang}"`,
      sort: [{ field: "date", direction: "desc" }],
    })
    .all();
  return records.map(parseRecord);
}

export async function getBlogArticleBySlug(slug: string): Promise<BlogArticle | null> {
  if (IS_BUILD) return null;
  const records = await blogTable()
    .select({
      filterByFormula: `{slug} = "${slug}"`,
      maxRecords: 1,
    })
    .firstPage();
  if (!records.length) return null;
  return parseRecord(records[0]);
}

export async function getExistingSlugs(): Promise<string[]> {
  const records = await blogTable().select({ fields: ["slug"] }).all();
  return records.map((r) => r.fields.slug as string).filter(Boolean);
}
