import { NextRequest, NextResponse } from "next/server";
import { RouteContext } from "@/types/RouteContext";
import dbConnect from "@/lib/dbConnect";
import Initiative from "@/models/admin-model/Initiative";
import Image from "@/models/admin-model/Image";

export const GET = async (req: NextRequest, context: RouteContext) => {
    try {
        await dbConnect();
        const { id } = await context.params;
        const initiatives = await Initiative.findById(id);
        if (!initiatives) {
            return NextResponse.json(
                { success: false, message: "Initiatives not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, data: initiatives });
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

        const existingInitiatives = await Initiative.findById(id);

        if (!existingInitiatives) {
            return NextResponse.json(
                { success: false, message: "Initiatives not found." },
                { status: 404 }
            );
        }

        if (body.image && body.image !== existingInitiatives.image) {
            if (existingInitiatives.image_publicId) {
                await Image.findByIdAndDelete(existingInitiatives.image_publicId);
            }
        }


        const updated = await Initiative.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true
        })
        return NextResponse.json({ message: "Initiatives updated successfully.", success: true, data: updated });

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

        const existingInitiatives = await Initiative.findById(id);
        if (!existingInitiatives) {
            return NextResponse.json(
                { success: false, message: "Initiatives not found." },
                { status: 404 }
            );
        }

        if (existingInitiatives.image_publicId) {
            await Image.findByIdAndDelete(existingInitiatives.image_publicId)
        }
        await Initiative.findByIdAndDelete(id);

        return NextResponse.json({ success: true, message: "Initiatives deleted successfully." });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}