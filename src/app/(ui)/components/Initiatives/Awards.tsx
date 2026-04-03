
import Image from "next/image";
import PreLoader from "../Common/PreLoader";
import Award from "@/models/admin-model/Award";
import { getData } from "@/lib/getData";

export const Awards = async () => {
    const awards = await getData(Award);
    
    return (
        <div>
            <div className="md:pb-12 text-center pb-8">
                <h2 className="text-4xl font-bold uppercase text-center text-primary">
                    Awards And{" "}
                    <span className="text-secondary">Recognitions</span>
                </h2>
                <p className="text-primary font-normal sm:text-19 mt-5  text-center m-auto">
                    RSVI and its staff have been honored with various state, national and international level awards and recognitions in a period of 16 years
                </p>
            </div>

            {
                awards?.length === 0 ? <PreLoader /> :
                    awards &&
                    <div className="grid md:grid-cols-3 gap-12">
                        {[...awards].reverse()?.map((award, index) => (
                            <div
                                key={award._id}
                                data-aos="fade-up"
                                data-aos-delay={index * 200}
                                className="relative flex flex-col justify-center items-center gap-4 bg-formbg p-8 rounded-2xl shadow-2xl border border-yellow-600/20 hover:border transition duration-500 group"
                            >
                                <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                                <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-full cursor-pointer overflow-hidden shadow-xl transition duration-500 group-hover:scale-110">
                                    <Image
                                        src={award.image}
                                        alt={`Image of ${award.title}`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>

                                <div className="">
                                    <h3 className="text-xl font-semibold text-center text-primary">
                                        {award.title}
                                    </h3>
                                    <p className="text-lg text-center text-secondary mt-2">
                                        {award.awardYear}
                                    </p>
                                </div>
                                <p className="text-SlateBlueText text-justify text-sm leading-relaxed">
                                    {award.description}
                                </p>
                            </div>
                        ))}
                    </div>}
        </div>
    );
}

