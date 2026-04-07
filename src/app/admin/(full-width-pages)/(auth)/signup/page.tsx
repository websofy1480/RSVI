import { SignUpForm } from "@/app/admin/components/auth/SignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | RSVI",
};

const SignUp: React.FC = () => <SignUpForm />;

export default SignUp;