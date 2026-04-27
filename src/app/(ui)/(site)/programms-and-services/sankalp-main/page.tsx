import { SankalpMainPage } from '@/app/(ui)/components/ProgrammsAndServices/SankalpMain';
import { HeroSub } from '../../../components/SharedComponent/HeroSub';
export const dynamic = 'force-dynamic';

const page: React.FC = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/programms-and-services/sankalp-main", text: "Sankalp Main" },
    ];
    return (
        <>
            <HeroSub
                title="Sankalp Main"
                description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
                breadcrumbLinks={breadcrumbLinks}
                imageSrc='activities/activities-banner.png'
            />
            <SankalpMainPage />
        </>
    );
};

export default page;
