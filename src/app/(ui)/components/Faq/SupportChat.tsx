import Link from 'next/link'
import { FaEnvelope, FaHeadset, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'

export const SupportChat: React.FC = () => {
    const whatsappNumber = "919876543210"
    const whatsAppApi = `https://wa.me/${whatsappNumber}?text=Hi%20Support%2C%20I%20need%20help`

    return (
        <div className="bg-light border rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6" data-aos="fade-right">
            <div className="flex sm:items-center items   gap-4">
                <div className='hidden sm:block'>
                    <FaHeadset className="text-learning  text-4xl" />
                </div>

                <div>
                    <h3 className="text-midnight_text font-semibold">Can't find{" "}
                        <span className='text-skyBlue'>your questions?</span></h3>
                    <p className="sm:text-lg text-19 text-midnight_text text-opacity-80 text-justify">
                        Need help? Drop us your queries!
                    </p>

                    <div className='flex sm:flex-row flex-col sm:items-center mt-2 gap-3 sm:gap-6'>
                        <Link href="tel:+9198765432" className="text-gray flex items-center gap-2 font-medium"><FaPhoneAlt className="text-error" /> <span>0522 3019456</span> </Link>
                        <Link href="mailto:hr@rsvi.org" className="font-medium text-gray flex items-center gap-2"><FaEnvelope className="text-learning" /> <span>hr@rsvi.org</span> </Link>
                    </div>
                </div>
            </div>

            <Link
                href={whatsAppApi}
                target="_blank"
                className="flex items-center gap-2 bg-success text-white px-6 py-3 rounded-lg shadow-md hover:bg-success/80 transition"
            >
                <FaWhatsapp className="text-2xl" />
                WhatsApp
            </Link>
        </div>
    )
}