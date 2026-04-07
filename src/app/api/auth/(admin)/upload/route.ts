import dbConnect from "@/lib/dbConnect";
import Image from "@/models/admin-model/Image";
import { NextRequest, NextResponse } from "next/server";

export  const POST = async (req: NextRequest) => {
  try {
    await dbConnect();
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "No file uploaded" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const image = await Image.create({
      name: file.name,
      data: buffer,
      contentType: file.type,
    });

    return NextResponse.json({
      message: "Image uploaded",
      public_id: image._id,
      secure_url : `/api/auth/upload/${image._id}`
    });
  } catch (error) {
    const err = error as Error;
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}