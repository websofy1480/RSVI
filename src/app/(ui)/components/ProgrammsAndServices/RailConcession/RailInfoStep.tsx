import { railInfo } from '@/app/api/data'
import { PiArrowBendDoubleUpRightDuotone } from 'react-icons/pi'

export const RailInfoStep: React.FC = () => {
    return (
        <section className="bg-formbg/20">
            <div className="container">
                <div className="text-center mb-4 sm:mb-11"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    <h2 className="text-primary md:text-40 text-28 pb-4 font-bold uppercase">
                        Railway{" "}
                        <span className="text-secondary">Concession Information</span>
                    </h2>
                    <p className="text-lg font-normal text-primary">
                        Check eligibility, required documents, and the step-by-step process to obtain your Railway Concession Certificate through RSVI.
                    </p>
                </div>

                <div className="grid gap-6 grid-cols-1 md:grid-cols-3">

                    {railInfo?.map((item, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 150}
                            data-aos-duration="800"
                            className="relative flex items-center bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition"
                        >
                            <div className="flex flex-col justify-center items-center text-white font-bold text-xl w-20 h-full bg-formbg">
                                <span className="text-2xl text-primary">{item.id}</span>
                            </div>
                            <div className="p-5 flex-1">
                                <h3 className="font-semibold text-lg text-primary mb-2"
                                    data-aos="fade-right"
                                    data-aos-delay={index * 150 + 100}
                                >
                                    {item.title}
                                </h3>

                                <div>
                                    {item?.description.map((desc, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-2"
                                            data-aos="fade-right"
                                            data-aos-delay={index * 150 + i * 100 + 150}
                                        >
                                            <div>
                                                <PiArrowBendDoubleUpRightDuotone
                                                    size={18}
                                                    className="text-primaryPink"
                                                />
                                            </div>

                                            <p className="text-SlateBlueText">
                                                {desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}
