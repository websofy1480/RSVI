export async function getBlogBySlug(slug: string) {
  const res = await fetch(
    `${process.env.BASE_URL!}/api/auth/blog-seo/${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;
  return res.json();
}
