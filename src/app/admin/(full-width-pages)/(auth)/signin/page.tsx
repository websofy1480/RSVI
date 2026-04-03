
import SignInForm from "@/app/admin/components/auth/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | RSVI",

};

export default function SignIn() {
  return <SignInForm />;
}