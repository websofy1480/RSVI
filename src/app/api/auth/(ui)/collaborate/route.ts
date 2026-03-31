import dbConnect from "@/lib/dbConnect"
import Collaborate from "@/models/ui-model/Collaborate";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
    try {
        await dbConnect();
        const collaboratesData = await Collaborate.find().sort({ createdAt: -1 })
        return NextResponse.json({ succcess: true, data: collaboratesData }, { status: 200 })
    } catch (error) {
        const err = error as Error;
        console.error("Error fetching collaboration data :", error);
        return NextResponse.json(
            { success: false, error: err.message },
            { status: 500 }
        );
    }
}

export const POST = async (req: NextRequest) => {
    try {
        await dbConnect();
        const { name, phone, email, collaborationsType, message, image, image_publicId, captcha } = await req.json();
        const captchaVerify = await fetch(
            `${process.env.RECAPTCHA_BASE_URL! + process.env.RECAPTCHA_SECRET_KEY!}&response=${captcha}`,
            { method: "POST" }
        );
        const captchaData = await captchaVerify.json();
        if (!captchaData.success) {
            return NextResponse.json({ message: "Captcha verification failed!" }, { status: 400 });
        }

        if (!name || !phone || !email || !collaborationsType || !message || !image || !image_publicId) {
            return NextResponse.json({ error: `All fields are required!` }, { status: 400 });
        }
        const newCollaborator = await Collaborate.create({ name, phone, email, collaborationsType, message, image, image_publicId });
        
        return NextResponse.json({ message: "Thank you for your interest in collaborating with us. Your request has been submitted successfully.", success: true, collaborate: newCollaborator });
    } catch (err) {
        const error = err as Error;
        console.error("Collaborator data error :", error);
        return NextResponse.json({ message: "Something went wrong while processing your collaboration request.", error: error.message || "Unknown error", }, { status: 500 });
    }

}