import { aboutUsPageProductSchema, successStoryPageMetaData } from "@/app/api/metaData";
import { Metadata } from "next";

export const metadata: Metadata = {
    title : "Servive Provider | RSVI"
};

export default function ServiveProviderLayout({
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
