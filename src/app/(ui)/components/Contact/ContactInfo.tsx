import { contactPageDetails } from '@/app/api/data'
import Link from 'next/link'

export const ContactInfo: React.FC = () => {
    return (
        <div className="bg-formbg/20 p-8 rounded-xl shadow-lg space-y-4">
            <h2
                className="text-2xl uppercase text-primary mb-4 font-semibold"
                data-aos="fade-up">
                Contact{" "}
                <span className="text-secondary">Information</span>
            </h2>
            <div className="space-y-6">
                {
                    contactPageDetails?.map((item, i) => (
                        <div key={i}>
                            {
                                i !== 3 ?
                                    <Link
                                        target={item.newTab}
                                        href={item.url}
                                        className="bg-white hover:bg-transparent flex border  shadow-md shadow-MidnightNavyText/50  p-6 items-center gap-4 rounded-2xl">

                                        <div className={`${i % 2 === 0 ? "text-primary" : "text-secondary"}`}>
                                            {item.icon}
                                        </div>
                                        <div className={`flex justify-center ${i !== 3 ? "flex-row" : "flex-col"} items-center gap-5 text-center`}>
                                            <h3 className="font-semibold bg-slat  text-sta">{item.title}</h3>
                                            <p className="text-SlateBlueText break-all sm:break-normal">
                                                {item.value}
                                            </p>
                                        </div>
                                    </Link>
                                    :
                                    <Link
                                        target={item.newTab}
                                        href={item.url}
                                        key={i}
                                        className="bg-white hover:bg-transparent flex border  shadow-md shadow-MidnightNavyText/50  p-6 items-center rounded-2xl">
                                        <div className="flex justify-center flex-col items-center gap-3 text-center">
                                            <div className="flex gap-4">
                                                <div className="text-secondary">
                                                    {item.icon}
                                                </div>
                                                <h3 className="font-semibold ">{item.title}</h3>
                                            </div>
                                            <p className="text-SlateBlueText break-all sm:break-normal">
                                                {item.value}
                                            </p>
                                        </div>
                                    </Link>
                            }
                        </div>
                    ))}
            </div>
        </div>
    )
}
