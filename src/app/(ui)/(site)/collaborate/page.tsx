import { CollaboratePage } from '../../components/collaborate';
import { HeroSub } from '../../components/SharedComponent/HeroSub';
export const dynamic = 'force-dynamic';

const page: React.FC = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/collaborate", text: "Collaborate" },
  ];
  return (
    <>
      <HeroSub
        title="Collaborate"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc='activities/activities-banner.png'
      />
      <CollaboratePage />
    </>
  );
};

export default page;
