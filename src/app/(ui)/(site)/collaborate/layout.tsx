import { aboutUsPageProductSchema, collaboratePageMetaData } from "@/app/api/metaData";
import { Metadata } from "next";

export const metadata: Metadata = collaboratePageMetaData;

export default function CollaborateLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <script id="about-us-product-schema" type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutUsPageProductSchema) }}
            />
            {children}
        </>
    );
}
