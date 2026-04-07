import { footer } from '@/app/api/data'
import Link from 'next/link'


export const FollowOurJournyCta: React.FC = () => {
    return (
        <div className="container">
            <div className="bg-primary rounded-2xl text-white py-10 px-10">
                <div className="flex flex-col items-center gap-6">
                    <h3 className="text-lg font-medium">
                        Follow our journey. Spread awareness.
                    </h3>
                    <div className="flex gap-5">
                        {footer?.socialMedia.map((item, index) => (
                            <Link key={index}
                                title={item.title}
                                href={item.url}
                                target="_blank"
                                className="w-12 h-12 flex items-center justify-center bg-secondary rounded-full shadow hover:bg-transparent hover:border transition"
                            >
                                {item.icon}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}