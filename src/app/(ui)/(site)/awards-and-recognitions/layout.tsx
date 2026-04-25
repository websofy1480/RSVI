import { AwardsRecognitionsPageMetaData } from "@/app/api/metaData";
import { Metadata } from "next";

export const metadata: Metadata = AwardsRecognitionsPageMetaData;

export default function AwardsRecognitionsLayout({
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
