import { HeroSub } from '../../../components/SharedComponent/HeroSub';
import { OurReach } from '@/app/(ui)/components/Impact/OurReach';
export const dynamic = 'force-dynamic';

const page: React.FC = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/impact/our-reach", text: "Our Reach" },
    ];
    return (
        <>
            <HeroSub
                title="Our Reach"
                description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
                breadcrumbLinks={breadcrumbLinks}
                imageSrc='activities/activities-banner.png'
            />
            <OurReach />
        </>
    );
};

export default page;
