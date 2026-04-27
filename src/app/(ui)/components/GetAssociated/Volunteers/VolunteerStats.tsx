import { VolunteerStatsData } from "@/app/api/data";

export const VolunteerStats = () => {
    return (
        <section>
            <div className="container grid gap-6 sm:grid-cols-3 text-center">
                {VolunteerStatsData?.map((s, i) => (
                    <div key={i} data-aos="zoom-in" data-aos-delay={i * 100}>
                        <h3 className="text-3xl font-bold text-primary">{s.value}</h3>
                        <p className="text-SlateBlueText">{s.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}