import Image from "next/image";



export const DeviceCard: React.FC<any> = ({ device, index }) => {
    return (
        <article
            data-aos="fade-up"
            tabIndex={0}
            data-aos-delay={index * 100}
            className="group bg-white rounded-2xl border overflow-hidden shadow-sm 
                 hover:shadow-xl hover:-translate-y-1 transition duration-300 focus:ring-2 focus:ring-formbg"
        >
            {/* Image */}
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={device.image}
                    alt={device.title}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                />
            </div>

            {/* Content */}
            <div className="p-4">
                <h3 className="font-semibold text-lg text-primary">
                    {device.title}
                </h3>

                <p className="text-sm text-secondary">{device.category}</p>

                <p className="mt-2 text-SlateBlueText">
                    {device.description}
                </p>

                <button className="mt-4 w-full bg-learning hover:bg-learning/80 text-white px-4 py-2 rounded-md">
                    Request Device
                </button>
            </div>
        </article>
    );
}