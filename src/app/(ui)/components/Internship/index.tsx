import { getData } from "@/lib/getData";
import { JoinUs } from "../Common/JoinUs";
import { OurPerks } from "./OurPerks";
import { WhatWeOffer } from "./WhatWeOffer";
import Internship from "@/models/admin-model/Internship";
import Perks from "@/models/admin-model/Perks";

export const InternshipPage = async () => {
    const internshipData = await getData(Internship);
    const perksData = await getData(Perks);
    
    return (
        <section>
            <div className="container">
                <div className="mb-12 text-center"
                    data-aos="fade-up">
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight uppercase text-primary">
                        What We{" "}
                        <span className="text-secondary"> Offer</span>
                    </h1>
                    <p className="mt-5 sm:text-19 text-secondary sm:text-center text-justify m-auto">
                        <span className="font-semibold text-primary">“Let the blind hold the torch” - </span>
                        empowering lives through structured rehabilitation and support.
                    </p>
                </div>
                <div className="mb-10">
                    <WhatWeOffer internshipData={internshipData} />
                </div>
            </div>
            <div className="mb-10">
                <OurPerks perksData={perksData} />
            </div>
            <JoinUs />
        </section>
    );
};