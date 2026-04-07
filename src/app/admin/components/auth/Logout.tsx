"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react'
import { Tooltip, TooltipProps } from '../common/Tooltip';
import { ThreeDots } from 'react-loader-spinner';
import Link from 'next/link';
import Image from 'next/image';

export const Logout: React.FC = () => {
    const [tooltip, setTooltip] = useState<TooltipProps | null>(null);
    const router = useRouter();

    const showTooltip = ({ message, type = "info" }: TooltipProps) => {
        setTooltip({ message, type });
        setTimeout(() => setTooltip(null), 3000);
    };

    const handleLogout = async () => {
        try {
            const res = await fetch("/api/auth/logout", { method: "POST" });
            const data = await res.json();
            if (res.ok) {
                setTimeout(() => {
                    router.push("/admin/signin");
                }, 1000)
                showTooltip({ message: data.message, type: "success" });
            }
        } catch (error) {
            const err = error as Error;
            console.log("Internal Server Error ", err)
            showTooltip({ message: "Internal Server Error", type: "error" });
        }
    };
    useEffect(() => {
        handleLogout()
    }, [])

    return (
        <div className="flex gap-5 flex-col h-screen items-center justify-center">
            {tooltip && <Tooltip message={tooltip.message} type={tooltip.type} />}
            <Link href="/">
                <Image
                    src="/images/logo/rsvi-logo.png"
                    alt="logo"
                    width={160}
                    height={50}
                    quality={100}
                    className='sm:w-28 w-10'
                    loading="eager"
                />
            </Link>
            <ThreeDots
                visible={true}
                height="80"
                width="80"
                color="#3c3c30"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
            />
            <p className="text-lg animate-pulse">Redirecting to sign in page....</p>
        </div>
    )
}
