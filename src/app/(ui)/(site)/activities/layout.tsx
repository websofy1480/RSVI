import { aboutUsPageMetaData } from "@/app/api/metaData";
import { Metadata } from "next";

export const metadata: Metadata = aboutUsPageMetaData;

export default function ContactLayout({
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
