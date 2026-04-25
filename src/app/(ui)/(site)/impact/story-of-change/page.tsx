import { HeroSub } from '../../../components/SharedComponent/HeroSub';
import { StoryOfChange } from '@/app/(ui)/components/Impact/StoryOChange';
export const dynamic = 'force-dynamic';

const page: React.FC = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/impact/story-of-change", text: "Story Of Change" },
    ];
    return (
        <>
            <HeroSub
                title="Story Of Change"
                description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
                breadcrumbLinks={breadcrumbLinks}
                imageSrc='activities/activities-banner.png'
            />
            <StoryOfChange />
        </>
    );
};

export default page;
