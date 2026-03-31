import { NextResponse } from "next/server";
import { staticPageUrls } from "../../../api/metaData";

export async function GET() {
    const res = await fetch(`${process.env.BASE_URL!}/api/auth/blog`, {
        cache: "no-store",
    });

    const blogs = await res.json();
    const blogUrls = blogs.data.map((blog: any) => ({
        url: `${process.env.BASE_URL!}/blog/${blog.slug}`,
        lastModified: "2026-01-15T07:20:51+00:00",
        priority: 0.64,
    }));

    const allUrls = [...staticPageUrls, ...blogUrls];

    const xmlUrls = allUrls.map((item) => `
      <url>
        <loc>${item.url}</loc>
        <lastmod>${item.lastModified}</lastmod>
        <priority>${item.priority}</priority>
      </url>
    `).join("");

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${xmlUrls}
  </urlset>`;

    return new NextResponse(sitemap, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
}
