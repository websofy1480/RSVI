import { HeroSub } from '../../components/SharedComponent/HeroSub';
import { AwardsAndRecognitionsPage } from '../../components/AwardsAndRecognitions';
export const dynamic = 'force-dynamic';

const page: React.FC = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/impact/awards-and-recognitions", text: "Awards & Recognitions" },
  ];
  return (
    <>
      <HeroSub
        title="Awards & Recognitions"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc='activities/activities-banner.png'
      />
      <AwardsAndRecognitionsPage />
    </>
  );
};

export default page;
