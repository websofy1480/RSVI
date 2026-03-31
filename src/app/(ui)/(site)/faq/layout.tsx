import { faqPageMetaData } from "@/app/api/metaData";
import { Metadata } from "next";

export const metadata: Metadata = faqPageMetaData;

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
