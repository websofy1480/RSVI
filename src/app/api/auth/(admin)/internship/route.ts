import dbConnect from "@/lib/dbConnect"
import Internship from "@/models/admin-model/Internship";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
    try {
        await dbConnect();
        const internshipData = await Internship.find().sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: internshipData }, { status: 200 });
    } catch (error) {
        const err = error as Error;
        console.error("Error fetching internship data : ", error);
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
        const newInternship = await Internship.create({ title, description, image, image_publicId });
        return NextResponse.json({ message: "Internship added successfully.", success: true, data: newInternship });
    } catch (error) {
        const err = error as Error;
        console.error("Error adding internship :", err);
        return NextResponse.json({ success: false, message: err.message }, { status: 500 });
    }
}