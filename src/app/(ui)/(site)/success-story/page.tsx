import HeroSub from '../../components/SharedComponent/HeroSub';
import { SuccessStoryPage } from '../../components/SuccessStory';
export const dynamic = 'force-dynamic';

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/success-story", text: "Success Stories" },
  ];
  return (
    <>
      <HeroSub
        title="Success Stories"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc='activities/activities-banner.png'
      />
      <SuccessStoryPage />
    </>
  );
};

export default page;
