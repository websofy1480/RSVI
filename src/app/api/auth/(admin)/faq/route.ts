import dbConnect from "@/lib/dbConnect"
import Faq from "@/models/admin-model/Faq";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
    try {
        await dbConnect();
        const faqsData = await Faq.find().sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: faqsData }, { status: 200 })

    } catch (error) {
        const err = error as Error;
        console.error("Error fetching faq's data :", error);
        return NextResponse.json(
            { success: false, error: err.message },
            { status: 500 }
        );
    }
}

export const POST = async (req: NextRequest) => {
    try {
        await dbConnect();
        const { question, answer } = await req.json();
        if (!question || !answer) {
            return NextResponse.json({ error: `All fields are required!` }, { status: 400 });
        }
        const newFaq = await Faq.create({ question, answer });
        return NextResponse.json({ message: "Faq added successfully.", success: true, data: newFaq })
    } catch (error) {
        const err = error as Error;
        console.error("Error adding faq :", err);
        return NextResponse.json({ success: false, message: err.message }, { status: 500 });
    }
}