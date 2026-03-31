import NextTopLoader from "nextjs-toploader";
import { DataProvider } from "../context/DataContext";
import { Aoscompo } from "@/lib/aos";
import { TopBar } from "./components/Layout/Topbar";
import { Header } from "./components/Layout/Header";
import { Footer } from "./components/Layout/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

export default function RootLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <DataProvider>
            <NextTopLoader color="#3c3c30" showSpinner={false} />
            <Aoscompo />
            <TopBar />
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
        </DataProvider>
    );
}
