import NextTopLoader from "nextjs-toploader";
import { DataProvider } from "../context/DataContext";
import { Aoscompo } from "@/lib/aos";
import { TopBar } from "./components/Layout/Topbar";
import { Navbar } from "./components/Layout/Navbar";
import { Footer } from "./components/Layout/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { ThemeProvider } from "next-themes"

export default function RootLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <DataProvider>
            <NextTopLoader color="#3c3c30" showSpinner={false} />
            <Aoscompo />
            <TopBar />
            <Navbar />
            {children}
            <Footer />
            <ScrollToTop />
        </DataProvider>
    );
}
