import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import sanitizeHtml from "sanitize-html";
import Blog from "@/models/admin-model/Blog";

export const GET = async () => {
  try {
    await dbConnect();
    const blogs = await Blog.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: blogs }, { status: 200 });
  } catch (error) {
    const err = error as Error;
    console.error("Error fetching blogs data : ", error);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    )
  }
}

export const POST = async (req: NextRequest) => {
  try {
    await dbConnect();
    const { title, subTitle, category, content, image, date, hashtag, image_public_Id, metaTitle, metaDescription, metakeywords, slug, schemaMarkup } = await req.json();

    if (!title || !subTitle || !content || !category || !image || !date || !hashtag || !image_public_Id || !metaTitle || !metaDescription || !slug || !metakeywords) {
      return NextResponse.json({ success: false, message: "All fields are required!" }, { status: 400 });
    }

    const cleanMetaKeywords = metakeywords.split(",").map((k: string) => k.trim().toLowerCase()).filter(Boolean);
    const cleanContent = sanitizeHtml(content);

    const newBlog = await Blog.create({ title, subTitle, content: cleanContent, image, category, date, hashtag, image_public_Id, metaTitle, metaDescription, slug, schemaMarkup, metakeywords: cleanMetaKeywords });
    return NextResponse.json({ message: "Blog added successfylly.", success: true, data: newBlog });
  } catch (error) {
    const err = error as Error;
    console.error("Error adding blog:", err);
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}
