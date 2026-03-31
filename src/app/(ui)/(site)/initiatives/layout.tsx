import { initiativesPageMetaData } from "@/app/api/metaData";
import { Metadata } from "next";

export const metadata: Metadata = initiativesPageMetaData;

export default function InitiativesLayout({
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
