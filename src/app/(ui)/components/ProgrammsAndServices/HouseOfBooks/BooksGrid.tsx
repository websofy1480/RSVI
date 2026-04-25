import Image from "next/image";
import { PreLoader } from "../../Common/PreLoader";
import { useState } from "react";
import { Pagination } from "@/app/admin/components/common/Pagination";
import { books } from "@/app/api/data";

export const BooksGrid: React.FC = () => {

    const [search, setSearch] = useState("");
    const [format, setFormat] = useState("All");
    const [language, setLanguage] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);

    const recordsPerPage = 6;

    const filteredBooks = books?.filter((book) => {
        const matchesSearch = book.title.toLowerCase().includes(search.toLowerCase()) || book.author.toLowerCase().includes(search.toLowerCase());

        const matchesFormat = format === "All" || book.format.toLowerCase() === format.toLowerCase();

        const matchesLanguage = language === "All" || book.language.toLowerCase() === language.toLowerCase();

        return matchesSearch && matchesFormat && matchesLanguage;
    });

    const totalPages = Math.ceil(filteredBooks.length / recordsPerPage);

    const currentData = filteredBooks.slice(
        (currentPage - 1) * recordsPerPage,
        currentPage * recordsPerPage
    );

    return (
        <section className="bg-formbg/20" id="books">
            <div className="container">
                <div
                    className="text-center mb-4 sm:mb-11"
                    data-aos="fade-up"
                >
                    <h2 className="text-primary md:text-40 text-28 pb-4 font-bold uppercase">
                        Find Your{" "}<span className="text-secondary">Next Book</span>
                    </h2>
                    <p className="text-lg font-normal text-primary">
                        Browse accessible books in audio, Braille, and digital formats. Read online, listen, or download based on your preference.
                    </p>
                </div>
                <div
                    className="mb-4 sm:mb-11"
                    data-aos="fade-up"
                >
                    <form className="grid gap-4 md:grid-cols-3">
                        <div data-aos="fade-up" data-aos-delay="100">
                            <label htmlFor="search" className="block mb-1 text-primary font-medium">
                                Search Books
                            </label>
                            <input
                                id="search"
                                type="text"
                                placeholder="Search by title or author"
                                value={search}
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                    setCurrentPage(1);
                                }}
                                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-formbg"
                            />
                        </div>

                        <div data-aos="fade-up" data-aos-delay="200">
                            <label htmlFor="format" className="block mb-1 text-primary font-medium">
                                Format
                            </label>
                            <select
                                id="format"
                                value={format}
                                onChange={(e) => {
                                    setFormat(e.target.value);
                                    setCurrentPage(1);
                                }}
                                className="w-full border rounded-lg p-3 outline-none cursor-pointer focus:ring-2 focus:ring-formbg"
                            >
                                {
                                    ["All", "Audio", "Braille", "PDF"]?.map((item, index) => (
                                        <option key={index}>{item}</option>
                                    ))
                                }
                            </select>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="300">
                            <label htmlFor="language" className="block mb-1 text-primary font-medium">
                                Language
                            </label>
                            <select
                                id="language"
                                value={language}
                                onChange={(e) => {
                                    setLanguage(e.target.value);
                                    setCurrentPage(1);
                                }}
                                className="w-full border rounded-lg p-3 outline-none cursor-pointer focus:ring-2 focus:ring-formbg"
                            >
                                {
                                    ["All", "English", "Hindi"]?.map((item, index) => (
                                        <option key={index}>{item}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </form>
                </div>

                <div>
                    {
                        currentData?.length === 0 ? <PreLoader /> :
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {currentData.map((book, index) => (
                                    <article
                                        key={book.id}
                                        tabIndex={0}
                                        data-aos="fade-up"
                                        data-aos-delay={index * 100}
                                        className="group bg-white border rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition focus:ring-2 focus:ring-formbg"
                                    >
                                        <div className="relative h-48 w-full">
                                            <Image
                                                src={"/images/house-of-book/house-of-book-about-us-1.jpg"}
                                                alt={`${book.title} book cover`}
                                                fill
                                                className="object-cover group-hover:scale-105 transition"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-semibold text-lg text-primary">{book.title}</h3>
                                            <p className="text-sm text-secondary">{book.author}</p>

                                            <p className="mt-2 text-SlateBlueText">{book.description}</p>

                                            <div className="flex gap-2 mt-4">
                                                <button className="bg-learning hover:bg-learning/80 text-white px-4 py-2 rounded-md">
                                                    Read
                                                </button>
                                                <button className="border border-secondary text-primary px-4 py-2 rounded-md">
                                                    Listen
                                                </button>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                    }
                </div>


            </div>
            {
                totalPages > 1 &&
                <div className={`${totalPages > 1 ? "mt-12" : "mt-0"}`}>
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                </div>
            }
        </section>
    );
};