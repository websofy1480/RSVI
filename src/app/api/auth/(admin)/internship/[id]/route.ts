import dbConnect from "@/lib/dbConnect";
import Image from "@/models/admin-model/Image";
import Internship from "@/models/admin-model/Internship";
import { RouteContext } from "@/types/RouteContext";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, context: RouteContext) => {
    try {
        await dbConnect();
        const { id } = await context.params;
        const internship = await Internship.findById(id);
        if (!internship) {
            return NextResponse.json(
                { success: false, message: "Internship not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, data: internship });
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
        const existingInternship = await Internship.findById(id);

        if (!existingInternship) {
            return NextResponse.json(
                { success: false, message: "Internship not found." },
                { status: 404 }
            );
        }
        if (body.image && body.image !== existingInternship.image) {
            if (existingInternship.image_publicId) {
                await Image.findByIdAndDelete(existingInternship.image_publicId);
            }
        }
        const updated = await Internship.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true
        });
        return NextResponse.json({ message: "Internship updated successfully.", success: true, data: updated });
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
        const existingInternship = await Internship.findById(id);
        if (!existingInternship) {
            return NextResponse.json(
                { success: false, message: "Internship not found." },
                { status: 404 }
            );
        }
        if (existingInternship.image_publicId) {
            await Image.findByIdAndDelete(existingInternship.image_publicId);
        }
        await Internship.findByIdAndDelete(id);
        return NextResponse.json({ success: true, message: "Internship deleted successfully." });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}