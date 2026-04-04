import Image from "next/image"

export const ReachRecognition = () => {
    return (
        <section className="bg-formbg/20" id="reach-recognition">
            <div className="mx-auto px-6">
                <div className="md:pb-12 text-center pb-8">
                    <h2 className="text-3xl sm:text-4xl font-bold uppercase text-center text-primary">
                        Reach/
                        <span className="text-secondary">Recognition</span>
                    </h2>
                </div>

                <div className="grid  container md:grid-cols-2 sm:gap-12 gap-5 items-center ">
                    <div data-aos="fade-right">
                        <Image
                            src="/images/hero/rsvi-hero-1.jpg"
                            alt="Image of RSVI Madhya Pradesh"
                            width={200}
                            height={300}
                            className="w-full h-full sm:h-[380px] rounded-2xl shadow-md"
                        />
                    </div>
                    <div data-aos="fade-left">
                        <h2 className="text-2xl md:text-[40px] font-bold text-primary mb-4">
                            RSVI Madhya{" "}<span className="text-secondary">Pradesh</span>
                        </h2>
                        <p className="text-SlateBlueText text-lg leading-relaxed text-justify">
                            RSVI has setup a branch in{" "}
                            <span className="font-semibold">Unchehra to serve the blind in the state of Madhya Pradesh,{" "}</span>
                            The Branch will empower the target group by providing training, education, assistive devices and accessible technology.
                        </p>
                        <p className="text-SlateBlueText mt-4 text-lg leading-relaxed text-justify">
                            Our objective is to reach the{" "}
                            <span className="font-semibold">Unreached.{" "}</span>Unchehara, inspite of being a border town of Madhya Pradesh, it has yet to enjoy the pleasures of infrastructure and development.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    )
}