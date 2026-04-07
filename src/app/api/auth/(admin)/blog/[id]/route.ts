import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Blog from "@/models/admin-model/Blog";
import Image from "@/models/admin-model/Image";
import { RouteContext } from "@/types/RouteContext";

export const GET = async (req: NextRequest, context: RouteContext) => {
    try {
        await dbConnect();
        const { id } = await context.params;

        const blog = await Blog.findById(id);
        if (!blog) {
            return NextResponse.json(
                { success: false, message: "Blog not found" },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, data: blog });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}

export const PUT = async (req: NextRequest, context: RouteContext) => {
    try {
        await dbConnect();
        const { id } = await context.params;
        const body = await req.json();

        const existingBlog = await Blog.findById(id);
        if (body.image && body.image !== existingBlog.image) {
            if (existingBlog.image_public_Id) {
                await Image.findByIdAndDelete(existingBlog.image_public_Id);
            }
        }

        const updated = await Blog.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });

        if (!updated || !existingBlog) {
            return NextResponse.json(
                { success: false, message: "Blog not found" },
                { status: 404 }
            );
        }
        return NextResponse.json({ message: "Blog updated successfully.", success: true, data: updated });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}

export const DELETE = async (req: NextRequest, context: RouteContext) => {


    try {
        await dbConnect();
        const { id } = await context.params;

        const existingBlog = await Blog.findById(id);
        if (existingBlog.image_public_Id) {
            await Image.findByIdAndDelete(existingBlog.image_public_Id);
        }
        const deleted = await Blog.findByIdAndDelete(id);
        if (!deleted || !existingBlog) {
            return NextResponse.json(
                { success: false, message: "Blog not found" },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, message: "Blog deleted successfully" });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}
