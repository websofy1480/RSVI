import dbConnect from "@/lib/dbConnect"
import Initiative from "@/models/admin-model/Initiative";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
    try {
        await dbConnect();
        const initiativesData = await Initiative.find().sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: initiativesData }, { status: 200 });
    } catch (error) {
        const err = error as Error;
        console.error("Error fetching initiatives data : ", error);
        return NextResponse.json(
            { success: false, error: err.message },
            { status: 500 }
        )
    }
}

export const POST = async (req: NextRequest) => {
    try {
        await dbConnect();
        const { title, description, initiativesType, category, image, image_publicId } = await req.json();

        if (!title || !description || !initiativesType || !image || !image_publicId) {
            return NextResponse.json({ error: `All fields are required!` }, { status: 400 });
        }
        const newInitiatives = await Initiative.create({ title, description, initiativesType, category, image, image_publicId });
        return NextResponse.json({ message: "Initiatives added successfully.", success: true, data: newInitiatives })
    } catch (error) {
        const err = error as Error;
        console.error("Error adding initiatives :", err);
        return NextResponse.json({ success: false, message: err.message }, { status: 500 });
    }
}