import { InternshipPage } from '../../components/Internship';
import HeroSub from '../../components/SharedComponent/HeroSub';

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/internship", text: "Internship" },
  ];
  return (
    <>
      <HeroSub
        title="Internship"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc='activities/activities-banner.png'
      />
      <InternshipPage />
    </>
  );
};

export default page;
