import { constants } from "buffer";
import { NextResponse } from "next/server";

export const POST = async () => {
  const res = NextResponse.json({ message: "Log out successfully." });
  res.cookies.set({
    name: "token",
    value: "",
    path: "/admin",
    httpOnly: true,
    expires: new Date(0),
  });
  return res;
}