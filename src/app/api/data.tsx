import { ThemeType } from "@/types/dataContext";
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaTwitter, } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { MdSupportAgent } from "react-icons/md";

export const whatWeDo = [
  {
    title: "Programs & Services",
    image: "/highlight/rsvi.png",
    slug: "training-programme"
  },
  {
    title: "House of Books",
    image: "/highlight/rsvi.png",
    slug: "additional-support"
  },
  {
    title: "Unique Projects ",
    image: "/highlight/rsvi.png",
    slug: "project"
  },
  {
    title: "Store House of Assistive Devices",
    image: "/highlight/rsvi.png",
    slug: "reach-recognition"
  }
];

export const statsData = [
  { label: "Vlunteers & Interns", value: 500, suffix: "+", imageUrl: "/images/highlight/rsvi.png", stateTextCol: "text-error" },
  { label: "Visually Impaired Students & Elderly", value: 10000, suffix: "+", imageUrl: "/images/highlight/rsvi.png", stateTextCol: "text-yellowRating" },
  { label: "Workshops & Seminars", value: 5000, suffix: "+", imageUrl: "/images/highlight/rsvi.png", stateTextCol: "text-success" },
  { label: "Braille Books", value: 2000, suffix: "+", imageUrl: "/images/highlight/rsvi.png", stateTextCol: "text-learning" },
  { label: "E-Texts & E-Pub", value: 2000, suffix: "+", imageUrl: "/images/highlight/rsvi.png", stateTextCol: "text-primaryPink" },
  { label: "Audio Books", value: 3000, suffix: "+", imageUrl: "/images/highlight/rsvi.png", stateTextCol: "text-burntOrange" },
  { label: "Beneficiaries", value: 5000, suffix: "+", imageUrl: "/images/highlight/rsvi.png", stateTextCol: "text-OliveDrab" },
  { label: "Healthcare Camps", value: 250, suffix: "+", imageUrl: "/images/highlight/rsvi.png", stateTextCol: "text-goldenOrange" },
  { label: "Railway Concessions", value: 2500, suffix: "+", imageUrl: "/images/highlight/rsvi.png", stateTextCol: "text-OceanDepthsDarkBorder" },
];

export const footer = {
  socialMedia: [
    {
      icon: <FiYoutube />,
      title: "Youtube",
      url: "https://www.youtube.com/c/RSVILucknow"
    },
    {
      icon: <FaFacebook />,
      title: "Facebook",
      url: "https://www.facebook.com/rsvilko"
    },
    {
      icon: <FaInstagram />,
      title: "Instagram",
      url: "https://www.instagram.com/missionrsvi?igshid=1wzs8v4dk0to1"
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/rsvi-working-for-the-visually-impaired-602bba1b3/"
    },
  ],
  quickLinks: [
    {
      title: "About Us",
      url: "/about-us"
    },
    {
      title: "Courses",
      url: "#"
    },
    {
      title: "Blog",
      url: "/blog"
    },
  ],
  support: [
    {
      title: "Contact Us",
      url: "/contact"
    },
    {
      title: "Terms & Conditions",
      url: "#"
    },
  ],

  contactDetails: [
    {
      icon: <FaMapMarkerAlt className="text-primary" />,
      title: "RSVI, 1st Floor, Moti Mahal Lawns, 2-Rana Pratap Marg, Lucknow-226001",
      url: `https://www.google.com/maps?q=${encodeURIComponent("RSVI, 1st Floor, Moti Mahal Lawns, 2-Rana Pratap Marg, Lucknow-226001")}`
    },
    {
      icon: <FaPhoneAlt className="text-primary" />,
      title: "0522-4070138",
      url: "tel:+9105224070138"
    },
    {
      icon: <FaEnvelope className="text-primary" />,
      title: "info@rsvi.org",
      url: "mailto:info@rsvi.org"
    },
  ]
}

export const contactPageDetails = [
  {
    title: "Phone",
    value: "+91-9305106040",
    icon: <FaPhoneAlt size={18} />,
    url: "tel:+919305106040",
    newTab: "_self",
  },
  {
    title: "Email",
    value: "info@rsvi.org",
    icon: <FaEnvelope size={18} />,
    url: "mailto:info@rsvi.org",
    newTab: "_self",
  },
  {
    title: "Working Hours",
    value: "Mon – Sat | 9:00 AM - 8:00 PM",
    icon: <MdSupportAgent size={25} />,
    url: "https://wa.me/919305106040?text=Hello%20I%20want%20to%20get%20started",
    newTab: "_blank",
  },
  {
    title: "Our Location",
    value: "RSVI, 1st Floor, Moti Mahal Lawns, 2-Rana Pratap Marg, Lucknow-226001 ",
    icon: <FaMapMarkerAlt size={20} />,
    url: `https://www.google.com/maps?q=${encodeURIComponent("RSVI, 1st Floor, Moti Mahal Lawns, 2-Rana Pratap Marg, Lucknow-226001")}`,
    newTab: "_blank",
  },
]

export const sociaMediaBlogShearing = [
  {
    platform: "whatsapp",
    icon: <FaWhatsapp className="text-[#25D366] hover:text-[#1DA851] transition-colors duration-300" />,
  },
  {
    platform: "facebook",
    icon: <FaFacebook className="text-[#1877F2] hover:text-[#145DBF] transition-colors duration-300" />,
  },
  {
    platform: "instagram",
    icon: <FaInstagram className="text-[#E4405F] hover:text-[#C13584] transition-colors duration-300" />,
  },
  {
    platform: "twitter",
    icon: <FaTwitter className="text-[#1DA1F2] hover:text-[#0D8DDC] transition-colors duration-300" />,
  },
  {
    platform: "linkedin",
    icon: <FaLinkedin className="text-[#0A66C2] hover:text-[#084A8C] transition-colors duration-300" />,
  },
  {
    platform: "copy",
    icon: <FaLink className="text-gray-600 hover:text-gray-900 transition-colors duration-300" />,
  },
]

export const rsviMagnitudeProblem = [
  "Total number of schools for the blind in the state of Utter Pradesh with a population of more than 20 crores is less than 25.",
  "Government Braille Production Centers including NGOs in the entire country is less than 10.",
  "Audio Recording Centers of books run by government and NGO's in the entire country is less than 15.",
  "Audio-Conversion Centers in the state of UP is only one.",
];

export const dynamicFont: { key: string, value: Number }[] = [
  {
    key: "100%",
    value: 18
  },
  {
    key: "150%",
    value: 20
  },
  {
    key: "200%",
    value: 22
  },
  {
    key: "250%",
    value: 24
  },
];


export const dynamicTheme: { color: string, value: any }[] = [
  {
    color: "#FFFFFF",
    value: "default"
  },
  {
    color: "#000000",
    value: "dark"
  },
  {
    color: "#dc2626",
    value: "red"
  },
  {
    color: "#429b5e",
    value: "green"
  },
  {
    color: "#2563EB",
    value: "blue"
  }
]

export const additionalSupport = ["Rail Concession", "Eyes & Health Checkup", "Old Age Support", "Aids & Appliances center", "Exposure After Training"];

export const projects = ["Upcoming", "Udaan"];

