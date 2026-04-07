import { Metadata } from "next";
import { Logout } from "../../components/auth/Logout";

export const metadata: Metadata = {
  title: "Log out | RSVI"
};
 const LogOut: React.FC = () => <Logout />;

export default LogOut;