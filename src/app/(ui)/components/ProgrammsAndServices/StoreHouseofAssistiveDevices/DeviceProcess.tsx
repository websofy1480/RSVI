import { deviceProcesssteps } from "@/app/api/data";

export const DeviceProcess = () => {

    return (
        <section className="bg-formbg/20">
            <div className="container">
                <div className="text-center mb-4 sm:mb-11"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    <h2 className="text-primary md:text-40 text-28 pb-4 font-bold uppercase">
                        How{" "}
                        <span className="text-secondary">It Works</span>
                    </h2>
                    <p className="text-lg font-normal text-primary">
                        Simple steps to access assistive devices
                    </p>
                </div>
                <div>
                    <div className="grid gap-6 md:grid-cols-2 ">
                        {deviceProcesssteps?.map((step, index) => (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 150}
                                className="p-5 rounded-xl bg-white shadow-md flex gap-4 items-center"
                            >
                                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-formbg text-primary font-bold">
                                    {index + 1}
                                </div>
                                <p className="text-SlateBlueText">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}