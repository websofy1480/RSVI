import { NextRequest, NextResponse } from "next/server";
import { RouteContext } from "@/types/RouteContext";
import dbConnect from "@/lib/dbConnect";
import Image from "@/models/admin-model/Image";
import Activity from "@/models/admin-model/Activity";

const GET = async (req: NextRequest, context: RouteContext) => {
    try {
        await dbConnect();
        const { id } = await context.params;
        const activity = await Activity.findById(id);
        if (!activity) {
            return NextResponse.json(
                { success: false, message: "Activity not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, data: activity });
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
        const existingActivity = await Activity.findById(id);

        if (!existingActivity) {
            return NextResponse.json(
                { success: false, message: "Activity not found." },
                { status: 404 }
            );
        }
        console.log(body.imaged)

        if (body.image && body.image !== existingActivity.image) {
            if (existingActivity.image_publicId) {
                await Image.findByIdAndDelete(existingActivity.image_publicId);
            }
        }
        const updated = await Activity.findByIdAndUpdate(id, body, { new: true, runValidators: true });
        return NextResponse.json({ message: "Activity updated successfully.", success: true, data: updated });
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
        const existingActivity = await Activity.findById(id);
        if (!existingActivity) {
            return NextResponse.json(
                { success: false, message: "Activity not found." },
                { status: 404 }
            );
        }
        if (existingActivity.image_publicId) {
            await Image.findByIdAndDelete(existingActivity.image_publicId);
        }
        await Activity.findByIdAndDelete(id);
        return NextResponse.json({ success: true, message: "Activity deleted successfully." });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}