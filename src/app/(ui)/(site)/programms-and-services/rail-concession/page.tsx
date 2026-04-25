import { RailConcessionPage } from '@/app/(ui)/components/ProgrammsAndServices/RailConcession';
import { HeroSub } from '../../../components/SharedComponent/HeroSub';
export const dynamic = 'force-dynamic';

const page: React.FC = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/programms-and-services/rail-concession", text: "Rail Concession" },
    ];
    return (
        <>
            <HeroSub
                title="Rail Concession"
                description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
                breadcrumbLinks={breadcrumbLinks}
                imageSrc='activities/activities-banner.png'
            />
            <RailConcessionPage />
        </>
    );
};

export default page;
