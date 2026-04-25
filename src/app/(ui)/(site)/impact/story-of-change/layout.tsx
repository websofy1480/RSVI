import { Metadata } from "next";

export const metadata: Metadata = {
    title : "Story Of Change | RSVI"
};

export default function DonorsLayout({
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
