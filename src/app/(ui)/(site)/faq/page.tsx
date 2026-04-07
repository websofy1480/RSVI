import { HeroSub } from '../../components/SharedComponent/HeroSub';
import { FaqPage } from '../../components/Faq';
export const dynamic = 'force-dynamic';

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/faq", text: "Faq's" },
  ];
  return (
    <>
      <HeroSub
        title="Faq's"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc='activities/activities-banner.png'
      />
      <FaqPage />
    </>
  );
};

export default page;
