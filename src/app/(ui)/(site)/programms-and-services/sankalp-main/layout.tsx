import { Metadata } from "next";

export const metadata: Metadata = {
    title : "Sankalp Main | RSVI"
};

export default function SankalpMainLayout({
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
