import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import BlogCategory from "@/models/admin-model/BlogCategory";

export const GET = async () => {
  try {
    await dbConnect();
    const blogsCategory = await BlogCategory.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: blogsCategory }, { status: 200 });
  } catch (error) {
    const err = error as Error;
    console.error("Error fetching blogsc ategory data : ", error);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    )
  }
}

export const POST = async (req: NextRequest) => {
  try {
    await dbConnect();
    const { category } = await req.json();

    if (!category) {
      return NextResponse.json({ success: false, message: "Category fields are required!" }, { status: 400 });
    }
    const newBlogCategory = await BlogCategory.create({ category });
    return NextResponse.json({ message: "Category added successfylly.", success: true, data: newBlogCategory  });
  } catch (error) {
    const err = error as Error;
    console.error("Error adding blog category :", err);
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}
