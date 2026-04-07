import { AboutUs } from '../../components/AboutUs';
import { HeroSub } from '../../components/SharedComponent/HeroSub';

const page: React.FC = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/about-us", text: "About Us" },
  ];
  return (
    <>
      <HeroSub
        title="About Us"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc='activities/activities-banner.png'
      />
      <AboutUs />
    </>
  );
};

export default page;
