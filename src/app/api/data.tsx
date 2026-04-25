import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaTwitter, } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { MdSupportAgent } from "react-icons/md";

export const whatWeDo = [
  {
    title: "Programs & Services",
    image: "/highlight/rsvi.png",
    slug: "/programms-and-services/trainings#training-programme"
  },
  {
    title: "House of Books",
    image: "/highlight/rsvi.png",
    slug: "/programms-and-services/house-of-books#books"
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


export const trainingAreas = [
  {
    title: "Digital Literacy",
    desc: "Learn smartphones, computers, internet browsing, email, and basic software usage.",
  },
  {
    title: "Assistive Technology Training",
    desc: "Hands-on training with screen readers like NVDA, JAWS, and VoiceOver for independent device usage.",
  },
  {
    title: "Vocational Skills Development",
    desc: "Tailoring, handicrafts, and small business skills for self-employment.",
  },
  {
    title: "Communication & Language Skills",
    desc: "Spoken English, confidence building, and interview preparation.",
  },
  {
    title: "Mobility & Orientation Training",
    desc: "Techniques for safe and independent movement in daily environments.",
  },
];

export const ourApproach = ["Accessible learning materials (audio & screen-reader friendly)", "Experienced trainers specialized in visual impairment", "Hands-on practical sessions", "Personalized learning paths"];

export const whoCanJoin = ["Individuals with partial or complete visual impairment", "Students, job seekers, and professionals", "Beginners to advanced learners"];

export const outcomes = ["Digital independence", "Job-ready skills", "Job-ready skills"];

export const books = [
    {
        id: 1,
        title: "Learn Computers",
        author: "RSVI",
        description: "Basic digital literacy book.",
        image: "/books/book1.jpg",
        format: "pdf",
        language: "hindi"
    },
    {
        id: 2,
        title: "Spoken English Guide",
        author: "RSVI",
        description: "Improve communication skills.",
        image: "/books/book2.jpg",
        format: "audio",
        language: "english"
    },
    {
        id: 3,
        title: "Introduction to Braille",
        author: "RSVI",
        description: "Learn the basics of Braille reading and writing.",
        image: "/books/book3.jpg",
        format: "braille",
        language: "english"
    },
    {
        id: 4,
        title: "Mobile Phone Training",
        author: "RSVI",
        description: "Guide to using smartphones with accessibility features.",
        image: "/books/book4.jpg",
        format: "pdf",
        language: "hindi"
    },
    {
        id: 5,
        title: "Career Skills for Beginners",
        author: "RSVI",
        description: "Develop essential job and communication skills.",
        image: "/books/book5.jpg",
        format: "audio",
        language: "english"
    },
    {
        id: 6,
        title: "Daily Life Independence",
        author: "RSVI",
        description: "Practical skills for independent living.",
        image: "/books/book6.jpg",
        format: "pdf",
        language: "hindi"
    },
    {
        id: 7,
        title: "Basic Computer Shortcuts",
        author: "RSVI",
        description: "Learn essential keyboard shortcuts for faster navigation.",
        image: "/books/book7.jpg",
        format: "pdf",
        language: "english"
    },
    {
        id: 8,
        title: "Audio Learning for Beginners",
        author: "RSVI",
        description: "Step-by-step guide to learning through audio resources.",
        image: "/books/book8.jpg",
        format: "audio",
        language: "hindi"
    },
    {
        id: 9,
        title: "Personality Development Guide",
        author: "RSVI",
        description: "Improve confidence, communication, and personal growth.",
        image: "/books/book9.jpg",
        format: "pdf",
        language: "english"
    }
];

export const railInfo = [
    {
        id: "01",
        title: "Eligibility Criteria",
        description: ["Must have 100% vision loss", "Valid medical certificate is required", "Open to individuals across India"],
    },
    {
        id: "02",
        title: "Required Documents",
        description: ["Disability certificate", "Identity proof", "Passport size photograph are required for application"],
    },
    {
        id: "03",
        title: "Application Process",
        description: ["Contact RSVI", "Submit documents", "Complete verification", "Receive your certificate"],
    },
];

