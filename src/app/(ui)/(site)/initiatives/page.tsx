import { HeroSub } from '../../components/SharedComponent/HeroSub';
import { InitiativesPage } from '../../components/Initiatives';
export const dynamic = 'force-dynamic';

const page: React.FC = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/faq", text: "Initiatives" },
  ];
  return (
    <>
      <HeroSub
        title="Initiatives"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc='activities/activities-banner.png'
      />
      <InitiativesPage />
    </>
  );
};

export default page;
