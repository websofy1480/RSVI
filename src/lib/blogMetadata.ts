import type { Metadata } from "next";
import { getBlogBySlug } from "./getBlogBySlug";

export async function blogMetadata(
  slug: string
): Promise<Metadata> {
  const blog = await getBlogBySlug(slug);
  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "This blog post does not exist.",
    };
  }

  const { metaTitle, metaDescription, metakeywords } = blog;
  return {
    title: metaTitle,
    description: metaDescription,
    keywords: metakeywords,
    alternates: {
      canonical: `${process.env.BASE_URL!}/api/auth/blog-seo/${slug}`,
    },
  };
}