import { contactPageSchema, contactPageMetaData } from "@/app/api/metaData";
import { Metadata } from "next";

export const metadata: Metadata = contactPageMetaData;

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <script id="contactUs-schema" type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
            />
            {children}
        </>
    );
}
