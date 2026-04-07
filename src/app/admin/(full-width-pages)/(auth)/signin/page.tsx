
import { SignInForm } from "@/app/admin/components/auth/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | RSVI",

};

const SignIn: React.FC = () => <SignInForm />;

export default SignIn;