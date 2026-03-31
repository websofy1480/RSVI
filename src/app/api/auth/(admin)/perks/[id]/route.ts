import { NextRequest, NextResponse } from "next/server";
import { RouteContext } from "@/types/RouteContext";
import dbConnect from "@/lib/dbConnect";
import Perks from "@/models/admin-model/Perks";
import Image from "@/models/admin-model/Image";

const GET = async (req: NextRequest, context: RouteContext) => {
    try {
        await dbConnect();
        const { id } = await context.params;
        const perks = await Perks.findById(id);
        if (!perks) {
            return NextResponse.json(
                { success: false, message: "Perks not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, data: perks });
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
        const existingPerks = await Perks.findById(id);

        if (!existingPerks) {
            return NextResponse.json(
                { success: false, message: "Perks not found." },
                { status: 404 }
            );
        }

        if (body.image && body.image !== existingPerks.image) {
            if (existingPerks.image_publicId) {
                await Image.findByIdAndDelete(existingPerks.image_publicId);
            }
        }
        const updated = await Perks.findByIdAndUpdate(id, body, { new: true, runValidators: true });
        return NextResponse.json({ message: "Perks updated successfully.", success: true, data: updated });
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
        const existingPerks = await Perks.findById(id);
        if (!existingPerks) {
            return NextResponse.json(
                { success: false, message: "Perks not found." },
                { status: 404 }
            );
        }
        if (existingPerks.image_publicId) {
            await Image.findByIdAndDelete(existingPerks.image_publicId);
        }
        await Perks.findByIdAndDelete(id);
        return NextResponse.json({ success: true, message: "Perks deleted successfully." });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}