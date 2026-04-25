"use client";
import Link from "next/link";
import { footer } from "@/app/api/data";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-formbg pt-10 pb-4">
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center text-center md:text-left">
          <div>
            <Link href="/">
              <Image
                src="/images/logo/rsvi-logo-1.jpg"
                alt="logo"
                width={160}
                height={50}
                quality={100}
                className='sm:w-28'
                loading="eager"
              />
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h4 className="text-xl font-semibold mb-4 text-MidnightNavyText">
              Support the cause of rsvi
            </h4>
            <Image
              src="/images/footer/qr-code.jpg"
              alt="logo"
              width={160}
              height={50}
              quality={100}
              className='w-auto h-auto'
              loading="eager"
            />
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-MidnightNavyText">
              Contact Details
            </h4>

            <ul className="space-y-3">
              {footer?.contactDetails.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center md:justify-start gap-3 text-[16px]"
                >
                  {item.icon}
                  <Link
                    href={item.url}
                    target={`${item.url.startsWith("https") ? "_blank" : "_self"}`}
                    className="text-primary w-64 text-justify font-medium hover:text-secondary transition"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex justify-center md:justify-start gap-4 mt-5">
              {footer?.socialMedia.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  target="_blank"
                  className="w-9 h-9 flex items-center justify-center bg-white rounded-full shadow hover:bg-secondary hover:text-white transition"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-primary/40 my-8"></div>
        <p className="text-center text-success text-[14px] leading-relaxed px-2">
          © {new Date().getFullYear()} All Rights Reserved by{" "}
          <Link
            href="/"
            className="text-primary hover:text-secondary font-medium"
          >
            RSVI {" "}
          </Link>
          Designed by{" "}
          <Link
            href="https://www.websofy.com/"
            target="_blank"
            className="text-primary hover:text-success font-medium"
          >
            Websofy Software Pvt. Ltd.
          </Link>
        </p>
      </div>
    </footer>
  );
};
