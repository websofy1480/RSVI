import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Blog from "@/models/admin-model/Blog";

export const GET = async (req: NextRequest, { params }: { params: Promise<{ slug: string }> }) => {
  await dbConnect();

  const { slug } = await params;
  const blog = await Blog.findOne({ slug });

  if (!blog) {
    return NextResponse.json(
      { message: "Blog not found" },
      { status: 404 }
    );
  }
  return NextResponse.json(blog);
}
