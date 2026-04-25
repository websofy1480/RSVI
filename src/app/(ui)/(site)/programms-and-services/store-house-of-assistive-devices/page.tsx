import { StoreHouseofAssistiveDevices } from '@/app/(ui)/components/ProgrammsAndServices/StoreHouseofAssistiveDevices';
import { HeroSub } from '../../../components/SharedComponent/HeroSub';
export const dynamic = 'force-dynamic';

const page: React.FC = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/programms-and-services/store-house-of-assistive-devices", text: "Store House of Assistive Devices" },
    ];
    return (
        <>
            <HeroSub
                title="Store House of Assistive Devices"
                description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
                breadcrumbLinks={breadcrumbLinks}
                imageSrc='activities/activities-banner.png'
            />
            <StoreHouseofAssistiveDevices />
        </>
    );
};

export default page;
