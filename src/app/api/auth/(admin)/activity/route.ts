import dbConnect from "@/lib/dbConnect"
import Activity from "@/models/admin-model/Activity";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
    try {
        await dbConnect();
        const activityData = await Activity.find().sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: activityData }, { status: 200 });
    } catch (error) {
        const err = error as Error;
        console.error("Error fetching activity data : ", error);
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
        const newActivity = await Activity.create({ title, description, image, image_publicId });
        return NextResponse.json({ message: "Activity added successfully.", success: true, data: newActivity })
    } catch (error) {
        const err = error as Error;
        console.error("Error adding activity :", err);
        return NextResponse.json({ success: false, message: err.message }, { status: 500 });
    }
}