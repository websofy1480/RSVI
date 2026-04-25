import { Metadata } from "next";

export const metadata: Metadata = {
    title : "Trainings | RSVI"
};

export default function TrainingsLayout({
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
