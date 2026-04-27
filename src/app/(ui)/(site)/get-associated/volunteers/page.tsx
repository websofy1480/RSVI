import { VolunteersPage } from '@/app/(ui)/components/GetAssociated/Volunteers';
import { HeroSub } from '../../../components/SharedComponent/HeroSub';
export const dynamic = 'force-dynamic';

const page: React.FC = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/get-associated/volunteers", text: "Volunteers" },
    ];
    return (
        <>
            <HeroSub
                title="Volunteers"
                description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
                breadcrumbLinks={breadcrumbLinks}
                imageSrc='activities/activities-banner.png'
            />
            <VolunteersPage />
        </>
    );
};

export default page;
