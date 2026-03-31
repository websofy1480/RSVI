import { Metadata } from "next";
import Logout from "../../components/auth/Logout";

export const metadata: Metadata = {
  title: "Log out | RSVI"
};

export default function LogOut() {
  return <Logout/>
}