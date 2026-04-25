import { SuccessStoryPage } from '@/app/(ui)/components/Impact/SuccessStory';
import { HeroSub } from '../../../components/SharedComponent/HeroSub';
export const dynamic = 'force-dynamic';

const page: React.FC = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/impact/success-story", text: "Success Stories" },
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
