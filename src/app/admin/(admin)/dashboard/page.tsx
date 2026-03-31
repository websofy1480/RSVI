import Chart from '@/app/admin/components/charts/Chart';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | RSVI",
};

export default function Dashboard() {
  return <Chart />;
}
