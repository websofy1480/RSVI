import Faq from "@/models/admin-model/Faq";
import { NextRequest, NextResponse } from "next/server";
import { RouteContext } from "@/types/RouteContext";

export const GET = async (req: NextRequest, context: RouteContext) => {
    try {
        const { id } = await context.params;
        const faq = await Faq.findById(id);
        if (!faq) {
            return NextResponse.json(
                { success: false, message: "Faq not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, data: faq });
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
        const { id } = await context.params;
        const body = await req.json();

        const updated = await Faq.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true
        });

        if (!updated) {
            return NextResponse.json(
                { success: false, message: "Faq not found" },
                { status: 404 }
            );
        }
        return NextResponse.json({ message: "Faq updated successfully.", success: true, data: updated });
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
        const { id } = await context.params;
        const deleted = await Faq.findByIdAndDelete(id);
        if (!deleted) {
            return NextResponse.json(
                { success: false, message: "Faq not found" },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, message: "Faq deleted successfully" });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}   