

export const RailCamp = ({ onOpen }: { onOpen: () => void }) => {
    return (
        <section className="py-14 px-4 md:px-10 bg-primary text-white"
            data-aos="fade-up"
            data-aos-duration="800"
        >
            <div className="container text-center">
                <h2 className="md:text-40 text-28 font-bold mb-4" data-aos="fade-up" data-aos-delay="100">
                    Organize a Railway Concession Camp
                </h2>
                <p className="text-lg mb-6 text-white/90" data-aos="fade-up" data-aos-delay="200">
                    RSVI organizes camps at schools, NGOs, and community locations
                    to help visually impaired individuals obtain Railway Concession Certificates.
                </p>
                <button
                    onClick={onOpen}
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    className="bg-white text-primary font-semibold px-8 py-3 rounded-full  transition hover:scale-105 focus:outline-none focus:ring-2"
                >
                    Request a Camp
                </button>
            </div>
        </section>
    );
}