"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BooksGrid } from "./BooksGrid";

export const HouseOfBooks: React.FC = () => {
    const router = useRouter();

    return (
        <section className="pb-0 pt-14">
            <div className="container">
                <div className="text-center"
                    data-aos="fade-up">
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight uppercase text-primary">
                        House{" "}<span className="text-secondary">Of Books</span>
                    </h1>
                    <p className="mt-5 sm:text-19 text-secondary sm:text-center text-justify m-auto">
                        Empowering visually impaired individuals through accessible reading and knowledge resources
                    </p>
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 items-center mb-20 gap-4 mx-auto">
                    <div
                        className="col-span-5 py-0"
                        data-aos="fade-right"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                    >

                        <p className="text-lg  text-SlateBlueText text-justify max-w-404 pt-7 pb-4 sm:pb-10">
                            Accessible books in audio, Braille, and digital formats for visually impaired readers—learn, listen, and grow independently.
                        </p>

                        <div className="flex gap-4">
                            <button
                                onClick={() => router.push("#books")}
                                className="mt-2 inline-block px-6 py-3 bg-learning text-white rounded-md font-semibold hover:bg-learning/80 transition"
                            >
                                Browse Book
                            </button>

                            <button
                                onClick={() => router.push("#training-programme")}
                                className="mt-2  inline-block px-6 py-3 text-primary rounded-md font-semibold border border-secondary/50  transition hover:bg-formbg/20"
                            >
                                Listen Audio Books
                            </button>
                        </div>
                    </div>
                    <div
                        className="col-span-7  hidden sm:block"
                        data-aos="fade-left"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                    >
                        <div className="mt-14 relative">
                            <Image
                                src="/images/house-of-book/house-of-book-about-us-1.jpg"
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
            <BooksGrid />
        </section>
    )
}


