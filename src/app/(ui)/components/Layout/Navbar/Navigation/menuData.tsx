import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  {
    label: "Programms & Services", href: "#", submenu: [
      { label: "House of Books", href: "/programms-and-services/house-of-books" },
      { label: "Sankalp Main", href: "/programms-and-services/sankalp-main" },
      { label: "Trainings", href: "/programms-and-services/trainings" },
      { label: "Rail Concession", href: "/programms-and-services/rail-concession" },
      { label: "Unique Projects", href: "/programms-and-services/unique-projects" },
      { label: "Store House of Assistive Devices", href: "/programms-and-services/store-house-of-assistive-devices" }
    ]
  },
  { label: "Projects", href: "/projects" },
  {
    label: "Impact ", href: "#",
    submenu: [
      { label: "Success Stories", href: "/impact/success-story" },
      { label: "Our Reach", href: "/impact/our-reach" },
      { label: "Story Of Change", href: "/impact/story-of-change" },
    ]
  },
  { label: "Internship", href: "/internship" },
  {
    label: "Get Associated ", href: "#",
    submenu: [
      { label: "Volunteers", href: "/get-associated/volunteers" },
      { label: "Donors", href: "/get-associated/donors" },
      { label: "Service Providers", href: "/get-associated/service-providers" },
    ]
  },
  { label: "Awards & Recognitions", href: "/awards-and-recognitions" },

  // { label: "Faq's", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
];




