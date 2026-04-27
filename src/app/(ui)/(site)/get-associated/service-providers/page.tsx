import { ServiceProviderPage } from '@/app/(ui)/components/GetAssociated/ServiceProviders';
import { HeroSub } from '../../../components/SharedComponent/HeroSub';
export const dynamic = 'force-dynamic';

const page: React.FC = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/get-associated/service-providers", text: "Servive Provider" },
    ];
    return (
        <>
            <HeroSub
                title="Servive Provider"
                description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
                breadcrumbLinks={breadcrumbLinks}
                imageSrc='activities/activities-banner.png'
            />
            <ServiceProviderPage />
        </>
    );
};

export default page;
