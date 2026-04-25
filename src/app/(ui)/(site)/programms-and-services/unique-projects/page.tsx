import { UniqueProjects } from '@/app/(ui)/components/ProgrammsAndServices/UniqueProjects';
import { HeroSub } from '../../../components/SharedComponent/HeroSub';
export const dynamic = 'force-dynamic';

const page: React.FC = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/programms-and-services/unique-projects", text: "Unique Projects" },
    ];
    return (
        <>
            <HeroSub
                title="Unique Projects"
                description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
                breadcrumbLinks={breadcrumbLinks}
                imageSrc='activities/activities-banner.png'
            />
            <UniqueProjects />
        </>
    );
};

export default page;
