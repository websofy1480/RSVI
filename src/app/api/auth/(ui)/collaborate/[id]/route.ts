import { NextRequest, NextResponse } from "next/server";
import { RouteContext } from "@/types/RouteContext";
import dbConnect from "@/lib/dbConnect";
import Collaborate from "@/models/ui-model/Collaborate";
import Image from "@/models/admin-model/Image";

export const PUT = async (req: NextRequest, context: RouteContext) => {
    try {
        await dbConnect();
        const { id } = await context.params;
        const body = await req.json();
        const { verified } = body;

        const updated = await Collaborate.findByIdAndUpdate(id, { ...body, isVerified: verified }, {
            new: true,
            runValidators: true
        })
        const res = verified ? { message: "Collaborator verified successfully.", success: true, data: updated } : { message: "Collaborator is not verified.", success: false, data: updated }


        return NextResponse.json(res);
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
        const existingCollab = await Collaborate.findById(id);
        if (!existingCollab) {
            return NextResponse.json({ success: false, message: "Collaboration not found." },
                { status: 404 })
        }

        if (existingCollab.image_publicId) {
            await Image.findByIdAndDelete(existingCollab.image_publicId);
        }
        await Collaborate.findByIdAndDelete(id);
        return NextResponse.json({ success: true, message: "Collaboration deleted successfully." })

    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}