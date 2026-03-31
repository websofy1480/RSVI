"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ThreeDots } from "react-loader-spinner";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];
      setTimeout(() => {
        if (token) {
          router.push("/admin/signin");
        } else {
          router.push("/admin/signin");
        }
      }, 2000);
    }
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [router]);

  if (!loading) return null;

  return (
    <div className="flex flex-col h-screen items-center justify-center">
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
  );
}
