import { ActivitiesPage } from '../../components/Activites';
import HeroSub from '../../components/SharedComponent/HeroSub';
export const dynamic = 'force-dynamic';

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/activites", text: "Activities" },
  ];
  return (
    <>
      <HeroSub
        title="Activities"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc='activities/activities-banner.png'
      />  
      <ActivitiesPage/>     
    </>
  );
};

export default page;
