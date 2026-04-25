import { HeroSub } from '../../../components/SharedComponent/HeroSub';
import { SuccessStoryPage } from '../../../components/Impact/SuccessStory';
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
            <SuccessStoryPage />
        </>
    );
};

export default page;
