import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export async function proxy(req: NextRequest) {
    const token = req.cookies.get("token")?.value;
    const secret = process.env.JWT_SECRET;
    if (!token || !secret) {
        return NextResponse.redirect(new URL("/admin/signin", req.url));
    }
    try {
        await jwtVerify(token, new TextEncoder().encode(secret));
        return NextResponse.next();
    } catch (err) {
        console.error("JWT verification failed:", err);
        return NextResponse.redirect(new URL("/admin/signin", req.url));
    }
}

export const config = {
    matcher: [
        "/admin/dashboard/:path*",
        "/admin/blogs/:path*",
        "/admin/category/:path*",
        "/admin/contact-us/:path*",
        "/admin/success-story/:path*",
        "/admin/profile/:path*",
        "/admin/internship/:path*",
        "/admin/initiatives/:path*",
        "/admin/activities/:path*",
        "/admin/awards/:path*",
        "/admin/perks/:path*",
        "/admin/faq/:path*",
        "/admin/join-us-request/:path*",
        "/admin/Collaborator/:path*",
    ],
};

