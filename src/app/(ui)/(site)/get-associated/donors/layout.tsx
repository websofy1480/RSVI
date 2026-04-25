import { Metadata } from "next";

export const metadata: Metadata = {
    title : "Donors | RSVI"
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
