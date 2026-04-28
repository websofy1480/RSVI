"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Activities: React.FC = () => {
    const router = useRouter()

    return (
            <section className="bg-sectionSecondary">
                <div className="container">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-4 mx-auto">
                        <div
                            className="col-span-5 py-0"
                            data-aos="fade-right"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                        >
                            <h2 className="text-primary uppercase md:text-40 text-28 font-bold">Ongoing {" "}
                                <span className="text-secondary">Activities</span>
                            </h2>
                            <p className="text-lg  text-SlateBlueText text-justify max-w-404 pt-7 pb-4 sm:pb-10">
                                There are lots of different activities for the Visually Impaired of all ages where there is a host of options out there to help, educate and keep them engaged.
                                Appropriate activities will lead to the all-around development of the Visually Impaired.
                            </p>
                            <button
                                onClick={() => router.push("/activities")}
                                className="mt-2 inline-block px-6 py-3 bg-primaryButton text-white rounded-md font-semibold hover:bg-transparent  border border-secondary/30 hover:border hover:border-secondary/50 hover:text-primary  transition"
                            >
                                Know More
                            </button>
                        </div>
                        <div
                            className="col-span-7  hidden sm:block"
                            data-aos="fade-left"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                        >
                            <div className="mt-14 relative">
                                <Image
                                    src="/images/hero/rsvi-hero-1.jpg"
                                    alt="Product"
                                    width={800}
                                    height={600}
                                    quality={100}
                                    sizes="100vw"
                                    className="rounded-22 w-full h-80 hover:scale-105 transition duration-300"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};
