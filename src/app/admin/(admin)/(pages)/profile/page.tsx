import UserCard from "@/app/admin/components/user-profile/UserCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Profile | RSVI",
};

export default function Profile() {
  return <UserCard />
}
