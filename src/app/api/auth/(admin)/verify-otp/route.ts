import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/admin-model/User";

export const POST = async (req: NextRequest) => {
  try {
    await dbConnect();
    const { email, otp } = await req.json();

    const user = await User.findOne({ email });
    if (!user) return NextResponse.json({ message: "User not found" }, { status: 404 });

    if (user.otp !== otp)
      return NextResponse.json({ message: "Invalid OTP" }, { status: 400 });

    user.isVerified = true;
    user.otp = null;
    await user.save();
    return NextResponse.json({ message: "OTP verified successfully." });
  } catch (error) {
    console.error("Verify OTP error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}