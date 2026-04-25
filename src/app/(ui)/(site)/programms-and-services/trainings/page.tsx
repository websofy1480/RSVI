import { HeroSub } from '../../../components/SharedComponent/HeroSub';
import { TrainingsPage } from '@/app/(ui)/components/ProgrammsAndServices/Trainings';
export const dynamic = 'force-dynamic';

const page: React.FC = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/programms-and-services/trainings", text: "Trainings" },
    ];
    return (
        <>
            <HeroSub
                title="Trainings"
                description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
                breadcrumbLinks={breadcrumbLinks}
                imageSrc='activities/activities-banner.png'
            />
            <TrainingsPage />
        </>
    );
};

export default page;
