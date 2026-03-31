import { NextRequest, NextResponse } from "next/server";
import { RouteContext } from "@/types/RouteContext";
import dbConnect from "@/lib/dbConnect";
import Award from "@/models/admin-model/Award";
import Image from "@/models/admin-model/Image";

export const GET = async (req: NextRequest, context: RouteContext) => {
    try {
        await dbConnect();
        const { id } = await context.params;
        const award = await Award.findById(id);
        if (!award) {
            return NextResponse.json(
                { success: false, message: "Award not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, data: award });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}

export const PUT = async (req: NextRequest, contex: RouteContext) => {
    try {
        await dbConnect();
        const { id } = await contex.params;
        const body = await req.json();

        const existingAward = await Award.findById(id);

        if (!existingAward) {
            return NextResponse.json(
                { success: false, message: "Award not found." },
                { status: 404 }
            );
        }

        if (body.image && body.image !== existingAward.image) {
            if (existingAward.image_publicId) {
                await Image.findByIdAndDelete(existingAward.image_publicId);
            }
        }

        const updated = await Award.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true
        })

        return NextResponse.json({ message: "Award updated successfully.", success: true, data: updated });
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
        const existingAward = await Award.findById(id);

        if (!existingAward) {
            return NextResponse.json(
                { success: false, message: "Award not found." },
                { status: 404 }
            );
        }

        if (existingAward.image_publicId) {
            await Image.findByIdAndDelete(existingAward.image_publicId);
        }

        await Award.findByIdAndDelete(id);

        return NextResponse.json({ success: true, message: "Award deleted successfully." })
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}