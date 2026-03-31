import dbConnect from "@/lib/dbConnect"
import Perks from "@/models/admin-model/Perks"
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
    try {
        await dbConnect();
        const perksData = await Perks.find().sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: perksData }, { status: 200 });
    } catch (error) {
        const err = error as Error;
        console.error("Error fetching perks data : ", error);
        return NextResponse.json(
            { success: false, error: err.message },
            { status: 500 }
        )
    }
}

export const POST = async (req: NextRequest) => {
    try {
        await dbConnect();
        const { title, description, image, image_publicId } = await req.json();
        if (!title || !description || !image || !image_publicId) {
            return NextResponse.json({ error: `All fields are required!` }, { status: 400 });
        }
        const newPerks = await Perks.create({ title, description, image, image_publicId });
        return NextResponse.json({ message: "Perks added successfully.", success: true, data: newPerks })
    } catch (error) {
        const err = error as Error;
        console.error("Error adding perks :", err);
        return NextResponse.json({ success: false, message: err.message }, { status: 500 });
    }
}