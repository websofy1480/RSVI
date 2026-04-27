import { DonorsPage } from '@/app/(ui)/components/GetAssociated/Donors';
import { HeroSub } from '../../../components/SharedComponent/HeroSub';
export const dynamic = 'force-dynamic';

const page: React.FC = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/get-associated/donors", text: "Donors" },
    ];
    return (
        <>
            <HeroSub
                title="Donors"
                description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
                breadcrumbLinks={breadcrumbLinks}
                imageSrc='activities/activities-banner.png'
            />
            <DonorsPage />
        </>
    );
};

export default page;
