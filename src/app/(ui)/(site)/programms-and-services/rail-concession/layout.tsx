import { Metadata } from "next";

export const metadata: Metadata = {
    title : "Rail Concession | RSVI"
};

export default function RailConcessionLayout({
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
