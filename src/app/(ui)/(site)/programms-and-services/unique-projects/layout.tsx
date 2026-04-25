import { Metadata } from "next";

export const metadata: Metadata = {
    title : "Unique Projects | RSVI"
};

export default function UniqueProjectsLayout({
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
