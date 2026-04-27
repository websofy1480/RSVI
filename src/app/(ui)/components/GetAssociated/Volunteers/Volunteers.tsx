import { benefitsOfVolunteer } from "@/app/api/data";
import { VolunteerRoles } from "./VolunteerRoles";
import { VolunteerStats } from "./VolunteerStats";

export const Volunteers: React.FC = () => {

    return (
        <section className="pb-0">
            <div className="container">
                <div className="text-center mb-4 sm:mb-11"
                    data-aos="fade-up">
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight uppercase text-primary">
                        Become{" "}
                        <span className="text-secondary">a Volunteer</span>
                    </h1>
                    <p className="mt-5 sm:text-19 text-secondary sm:text-center text-justify m-auto">
                        Interactive programs designed to empower and educate the visually impaired community
                    </p>
                </div>

                <div className="mb-4 sm:mb-11">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {benefitsOfVolunteer?.map((item, i) => (
                            <div
                                tabIndex={0}
                                key={i}
                                data-aos="fade-up"
                                data-aos-delay={i * 100}
                                className="p-5  shadow text-center
                                group bg-white border border-secondary cursor-pointer  rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition focus:ring-2 focus:ring-formbg
                                "
                            >
                                <p className="text-SlateBlueText">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <VolunteerRoles />
            <VolunteerStats />
        </section>
    )
}






