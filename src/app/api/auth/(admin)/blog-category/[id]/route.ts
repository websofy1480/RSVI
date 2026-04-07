import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import BlogCategory from "@/models/admin-model/BlogCategory";
import { RouteContext } from "@/types/RouteContext";

export const GET = async (req: NextRequest, context: RouteContext) => {
    try {
        await dbConnect();
        const { id } = await context.params;
        const blogCategory = await BlogCategory.findById(id);
        if (!blogCategory) {
            return NextResponse.json(
                { success: false, message: "Category not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, data: blogCategory });
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
        const updated = await BlogCategory.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });

        if (!updated) {
            return NextResponse.json(
                { success: false, message: "Category not found" },
                { status: 404 }
            );
        }
        return NextResponse.json({ message: "Category updated successfully.", success: true, data: updated });
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
        const deleted = await BlogCategory.findByIdAndDelete(id);
        if (!deleted) {
            return NextResponse.json(
                { success: false, message: "Category not found" },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, message: "Category deleted successfully" });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}
