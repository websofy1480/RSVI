import { VerifyOtpPage } from "@/app/admin/components/auth/VerifyOtp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verify Otp | RSVI",
};

const VerifyOtp: React.FC = () => <VerifyOtpPage />;

export default VerifyOtp;