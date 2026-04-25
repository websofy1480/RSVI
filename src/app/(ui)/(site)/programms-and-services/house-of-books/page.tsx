import { HouseOfBooksPage } from '@/app/(ui)/components/ProgrammsAndServices/HouseOfBooks';
import { HeroSub } from '../../../components/SharedComponent/HeroSub';
export const dynamic = 'force-dynamic';

const page: React.FC = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/programms-and-services/house-of-books", text: "House Of Books" },
    ];
    return (
        <>
            <HeroSub
                title="House Of Books"
                description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
                breadcrumbLinks={breadcrumbLinks}
                imageSrc='activities/activities-banner.png'
            />
            <HouseOfBooksPage />
        </>
    );
};

export default page;
