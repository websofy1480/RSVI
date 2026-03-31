import { featuresPageMetaData } from "@/app/api/metaData";
import { Metadata } from "next";

export const metadata: Metadata = featuresPageMetaData;

export default function FeaturesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>{children}</>
    );
}
