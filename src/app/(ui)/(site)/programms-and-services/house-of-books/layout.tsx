import { Metadata } from "next";

export const metadata: Metadata = {
    title : "House Of Books | RSVI"
};

export default function HouseOfBooksLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
        </>
    );
}
