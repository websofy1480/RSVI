import { Metadata } from "next";

export const metadata: Metadata = {
    title : "Store House Of Assistive Devices | RSVI"
};

export default function StoreHouseOfAssistiveDevicesLayout({
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
