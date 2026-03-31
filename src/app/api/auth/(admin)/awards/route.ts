import dbConnect from "@/lib/dbConnect"
import Award from "@/models/admin-model/Award";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    try {
        await dbConnect();
        const awardData = await Award.find().sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: awardData }, { status: 200 });
    } catch (error) {
        const err = error as Error;
        console.error("Error fetching award data : ", error);
        return NextResponse.json(
            { success: false, error: err.message },
            { status: 500 }
        )
    }
}

export const POST = async (req: NextRequest) => {
    try {
        await dbConnect();
        const { title, awardYear, description, image, image_publicId } = await req.json();

        console.log(" title, awardYear, description, image, image_publicId --> ", title, awardYear, description, image, image_publicId)
        if (!title || !awardYear || !description || !image || !image_publicId) {
            return NextResponse.json({ error: `All fields are required!` }, { status: 400 });
        }

        const newAward = await Award.create({ title, awardYear, description, image, image_publicId });
        return NextResponse.json({ message: "Award added successfully.", success: true, data: newAward })
    } catch (error) {
        const err = error as Error;
        console.error("Error adding award :", err);
        return NextResponse.json({ success: false, message: err.message }, { status: 500 });
    }
}