
export const categories = ["All", "Mobility", "Digital", "Learning", "Daily"];

export const DeviceCategoryFilter: React.FC<{
    selected: string, setSelected: (val: string) => void
}> = ({ selected, setSelected, }) => {
    return (
        <div
            className="mb-4 sm:mb-11 flex flex-wrap gap-3 justify-center"
            data-aos="fade-up"
        >
            {categories.map((cat, index) => (
                <button
                    key={index}
                    onClick={() => setSelected(cat)}
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                    className={`px-3 py-2 sm:px-6 sm:py-3 text-sm sm:text-base rounded-md font-semibold transition-all duration-300 
            ${selected === cat
                            ? "bg-primary text-white scale-105"
                            : "border border-secondary/50 text-primary hover:bg-primary hover:text-white"
                        }`}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
}