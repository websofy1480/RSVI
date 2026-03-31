import dbConnect from "@/lib/dbConnect"
import JoinUs from "@/models/ui-model/JoinUs";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
    try {
        await dbConnect();
        const joinUsData = await JoinUs.find().sort({ createdAt: -1 });
        return NextResponse.json({ succcess: true, data: joinUsData }, { status: 200 });
    } catch (error) {
        const err = error as Error;
        console.error("Error fetching join us data :", error);
        return NextResponse.json(
            { success: false, error: err.message },
            { status: 500 }
        );
    }
}

export const POST = async (req: NextRequest) => {
    try {
        await dbConnect();
        const { name, phone, department, message, captcha } = await req.json();

        const captchaVerify = await fetch(
            `${process.env.RECAPTCHA_BASE_URL! + process.env.RECAPTCHA_SECRET_KEY!}&response=${captcha}`,
            { method: "POST" }
        );
        const captchaData = await captchaVerify.json();
        if (!captchaData.success) {
            return NextResponse.json({ message: "Captcha verification failed!" }, { status: 400 });
        }

        if (!name || !phone || !department || !message || !captcha) {
            return NextResponse.json({ error: `All fields are required!` }, { status: 400 });
        }
        const newJoinUs = await JoinUs.create({ name, phone, department, message });
        return NextResponse.json({ message: "Thank you for joining us! Your request has been received successfully. Together, we can create meaningful change.", success: true, collaborate: newJoinUs })
    } catch (err) {
        const error = err as Error;
        console.error("Join us data error :", error);
        return NextResponse.json({ message: "Something went wrong while processing your joining request.", error: error.message || "Unknown error", }, { status: 500 });
    }
}