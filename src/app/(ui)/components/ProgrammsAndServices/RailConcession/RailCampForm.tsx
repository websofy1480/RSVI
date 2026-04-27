import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";


export const RailCampForm = ({ open, onClose }: { open: boolean, onClose: () => void }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (open) {
            setShow(true);
        } else {
            const timeout = setTimeout(() => setShow(false), 200);
            return () => clearTimeout(timeout);
        }
    }, [open]);

    if (!show) return null;

    return (
        <div
            onClick={onClose}
            className={`fixed inset-0 flex items-center justify-center z-50 px-4 transition-all duration-200
                ${open ? "bg-black/60 opacity-100" : "bg-black/0 opacity-0"}
            `}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`bg-white w-full max-w-lg rounded-2xl p-6 relative transform transition-all duration-200
                    ${open
                        ? "scale-100 translate-y-0 opacity-100"
                        : "scale-95 translate-y-6 opacity-0"}
                `}
            >
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-xl z-50 cursor-pointer flex h-9.5 w-9.5 items-center justify-center rounded-full bg-primary/20 text-primary transition-colors
                    hover:bg-transparent hover:text-secondary hover:border sm:h-9 sm:w-9"
                    aria-label="Close form"
                >
                    <RxCross2 size={20} />
                </button>
                <h2
                    className="text-2xl font-bold text-primary mb-6"
                    data-aos="fade-up"
                >
                    Apply or Request a Camp
                </h2>
                <form className="space-y-4">
                    <input
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="w-full border p-3 rounded"
                        placeholder="Name"
                    />

                    <input
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="w-full border p-3 rounded"
                        placeholder="Phone"
                    />

                    <select
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="w-full border p-3 rounded"
                    >
                        <option>Individual Application</option>
                        <option>Camp Request</option>
                    </select>

                    <button
                        data-aos="zoom-in"
                        data-aos-delay="250"
                        className="bg-learning text-white px-6 py-3 rounded-lg w-full"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}