import { ourApproach, outcomes, trainingAreas, whoCanJoin } from "@/app/api/data";

export const TrainingOverview = () => {
    return (
        <section
            className="bg-formbg/20"
            aria-labelledby="training-overview-heading"
        >
            <div className="container">
                <div
                    className="text-center mb-4 sm:mb-11"
                    data-aos="fade-up"
                >
                    <h2 className="text-primary md:text-40 text-28 pb-4 font-bold uppercase">
                        Training <span className="text-secondary">Overview</span>
                    </h2>
                    <p className="text-lg font-normal text-primary">
                        At RSVI, we provide accessible training programs designed for visually
                        impaired individuals to build independence, confidence, and
                        job-ready skills. Our courses are practical, inclusive, and tailored
                        for real-world needs.
                    </p>
                </div>
                <div
                    role="list"
                    aria-label="Training areas offered"
                    className="space-y-6"
                >
                    {trainingAreas.map((item, index) => (
                        <div
                            key={index}
                            role="listitem"
                            tabIndex={0}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="p-5 rounded-xl shadow-lg border bg-navBg border-secondary
                                       transition-all duration-300
                                       hover:-translate-y-1 hover:shadow-xl
                                       focus:outline-none focus:ring-2 focus:ring-formbg"
                        >
                            <h3 className="text-2xl text-primary font-semibold mb-2">
                                {item.title}
                            </h3>
                            <p className="text-SlateBlueText text-justify text-lg">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
                <div
                    className="mt-10"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <h3 className="text-2xl text-primary font-semibold mb-4">
                        Our Approach
                    </h3>
                    <ul className="list-disc text-SlateBlueText text-justify text-lg pl-6 space-y-2">
                        {
                            ourApproach?.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))
                        }
                    </ul>
                </div>
                <div
                    className="mt-10"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <h3 className="text-2xl text-primary font-semibold mb-4">
                        Who Can Join?
                    </h3>
                    <ul className="list-disc text-SlateBlueText text-justify text-lg pl-6 space-y-2">
                        {
                            whoCanJoin?.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))
                        }
                    </ul>
                </div>
                <div
                    className="mt-10"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    <h3 className="text-2xl text-primary font-semibold mb-4">
                        Outcomes
                    </h3>
                    {/*  */}
                    <ul className="list-disc text-SlateBlueText text-justify text-lg pl-6 space-y-2">
                        {
                            outcomes?.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))
                        }
                    </ul>
                </div>

            </div>
        </section>
    );
}