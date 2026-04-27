const roles = [
    {
        title: "Trainer",
        desc: "Help teach digital and life skills.",
    },
    {
        title: "Content Creator",
        desc: "Create accessible learning materials.",
    },
    {
        title: "Field Volunteer",
        desc: "Assist in camps and outreach programs.",
    },
    {
        title: "Technical Support",
        desc: "Support accessibility tools and devices.",
    },
];

export const VolunteerRoles = () => {

    
    return (
        <section className="bg-formbg/20">
            <div className="container">
                <div
                    className="text-center mb-4 sm:mb-11"
                    data-aos="fade-up"
                >
                    <h2 className="text-primary md:text-40 text-28 pb-4 font-bold uppercase">
                        Volunteer{" "}<span className="text-secondary">Roles</span>
                    </h2>
                    <p className="text-lg font-normal text-primary">
                        Choose a role where your skills can create meaningful impact and support visually impaired individuals in building independence.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {roles.map((role, i) => (
                        <div
                            key={i}
                            data-aos="fade-up"
                            data-aos-delay={i * 120}
                            className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition"
                        >
                            <h3 className="text-lg font-semibold text-primary mb-2">{role.title}</h3>
                            <p className="text-SlateBlueText">{role.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}