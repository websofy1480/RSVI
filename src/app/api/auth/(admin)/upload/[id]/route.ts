import dbConnect from "@/lib/dbConnect";
import Image from "@/models/admin-model/Image";
import { RouteContext } from "@/types/RouteContext";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest, context: RouteContext) => {
  try {
    const { id } = await context.params;

    await dbConnect();

    const image = await Image.findById(id);

    if (!image) {
      return new Response("Image not found", { status: 404 });
    }

    return new Response(image.data, {
      headers: {
        "Content-Type": image.contentType || "image/jpeg",
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error(err);
    return new Response("Server error", { status: 500 });
  }
}
