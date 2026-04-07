import { HeroSub } from "../../components/SharedComponent/HeroSub";
import { ContactPage } from "../../components/Contact";

const page: React.FC = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <>
      <HeroSub
        title="Contact Us"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive understanding of the latest trends."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc="activities/activities-banner.png"
      />
      <ContactPage />
    </>
  );
};

export default page;
