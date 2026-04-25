import { aboutUsPageProductSchema, successStoryPageMetaData } from "@/app/api/metaData";
import { Metadata } from "next";

export const metadata: Metadata = {
    title : "Volunteers | RSVI"
};

export default function VolunteersLayout({
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
