import { NextRequest, NextResponse } from "next/server";
import { RouteContext } from "@/types/RouteContext";
import dbConnect from "@/lib/dbConnect";
import SuccessStory from "@/models/admin-model/SuccessStory";
import Image from "@/models/admin-model/Image";

export const GET = async (req: NextRequest, context: RouteContext) => {
    try {
        await dbConnect();
        const { id } = await context.params;
        const successStory = await SuccessStory.findById(id);
        if (!successStory) {
            return NextResponse.json(
                { success: false, message: "Success story not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, data: successStory });
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
        const existingSuccessStoty = await SuccessStory.findById(id);

        if (!existingSuccessStoty) {
            return NextResponse.json(
                { success: false, message: "Success story not found." },
                { status: 404 }
            );
        }
        if (body.image && body.image !== existingSuccessStoty.image) {
            if (existingSuccessStoty.image_publicId) {
                await Image.findByIdAndDelete(existingSuccessStoty.image_publicId);
            }
        }

        const updated = await SuccessStory.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true
        })

        return NextResponse.json({ message: "Success story updated successfully.", success: true, data: updated });
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
        const existingSuccessStory = await SuccessStory.findById(id);
        if (!existingSuccessStory) {
            return NextResponse.json(
                { success: false, message: "Success story not found." },
                { status: 404 }
            );
        }

        if (existingSuccessStory.image_publicId) {
            await Image.findByIdAndDelete(existingSuccessStory.image_publicId);
        }
        await SuccessStory.findByIdAndDelete(id);
        return NextResponse.json({ success: true, message: "Success story deleted successfully." });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}