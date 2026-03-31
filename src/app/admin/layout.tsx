import { SidebarProvider } from "@/app/context/SidebarContext";
// import "./globals-admin.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SidebarProvider>{children}</SidebarProvider>
}
