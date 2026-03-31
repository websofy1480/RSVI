import dbConnect from "@/lib/dbConnect"
import SuccessStory from "@/models/admin-model/SuccessStory";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
    try {
        await dbConnect();
        const successStoryData = await SuccessStory.find().sort({ createdAt: -1 });
        return NextResponse.json({ successs: true, data: successStoryData }, { status: 200 });
    } catch (error) {
        const err = error as Error;
        console.error("Error fetching success story data : ", error);
        return NextResponse.json(
            { success: false, error: err.message },
            { status: 500 }
        )
    }
}

export const POST = async (req: NextRequest) => {
    try {
        const { name, description, image, image_publicId } = await req.json();
        if (!name || !description || !image || !image_publicId) {
            return NextResponse.json({ error: `All fields are required!` }, { status: 400 })
        }
        const newSuccessStory = await SuccessStory.create({ name, description, image, image_publicId });
        return NextResponse.json({ message: "Success story added successfully.", success: true, data: newSuccessStory });
    } catch (error) {
        const err = error as Error;
        console.error("Error adding success story :", err);
        return NextResponse.json({ success: false, message: err.message }, { status: 500 });
    }
}