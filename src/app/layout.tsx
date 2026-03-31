import { homePageGeoTag, homePageMetaData, homePageProductSchema } from "./api/metaData";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Metadata } from "next";
import "./globals.css";

const dminter = Inter({
  subsets: ["latin"]
});


export const metadata: Metadata = homePageMetaData;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <Script id="product-schema" type="application/ld+json" strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageProductSchema) }}
        />
        {
          homePageGeoTag?.map((item, index) => (
            <meta key={index} name={item.tagName} content={item.tagContent} />
          ))
        }
      </head>
      <body className={dminter.className}>
        {children}
      </body>
    </html>
  );
}
