import { HeroSub } from '../../components/SharedComponent/HeroSub';
import { ProjectsPage } from '../../components/Projects';

const page: React.FC = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/projects", text: "Projects" },
    ];
    return (
        <>
            <HeroSub
                title="Projects"
                description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
                breadcrumbLinks={breadcrumbLinks}
                imageSrc='activities/activities-banner.png'
            />
            <ProjectsPage />
        </>
    );
};

export default page;
