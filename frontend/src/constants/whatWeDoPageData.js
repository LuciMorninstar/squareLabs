import BrandSvg from "../assets/whatWeDoPage/brand.svg?react";
import CLoudSvg from "../assets/whatWeDoPage/cloud.svg?react";
import DomainSvg from "../assets/whatWeDoPage/domain.svg?react";
import SeoSvg from "../assets/whatWeDoPage/seo.svg?react";
import WebDevelopmentSvg from "../assets/whatWeDoPage/webDevelopment.svg?react";
import MaintenanceSvg from "../assets/whatWeDoPage/maintenance.svg?react";
import MobileApplicationSvg from "../assets/whatWeDoPage/mobileApplication.svg?react";
import DigitalMarketingSvg from "../assets/whatWeDoPage/DigitalMarketing.svg?react";
import cloud from "../assets/whatWeDoPage/brand.png"
import digital from "../assets/whatWeDoPage/digital.png"
import seo from "../assets/whatWeDoPage/seo.png"
import mobile from "../assets/whatWeDoPage/mobile.png"
import web from "../assets/whatWeDoPage/web.png"
import brand from "../assets/whatWeDoPage/brand.png"

export const whatWeDoPageData = [
  {
    id: 1,
    title: "Digital Products",
    desc: "We design digital experiences that connect business goals with user needs, focusing on aesthetics, usability, and technical performance.",
    cards: [
      {
        id: 1,
        title: "UI/UX Design",
        icon:BrandSvg,
        lists: [
          "User Research",
          "Wireframes & Prototypes",
          "High-fidelity Design",
          "Design Systems",
        ],
        image:digital,
      
      },
      {
        id: 2,
        title: "Web Development",
        icon:WebDevelopmentSvg,
        lists: [
          "Frontend Engineering",
          "Backend Architecture",
          "CMS Integration",
          "E-commerce Engines",
        ],
        image:web,
      },
      {
        id: 3,
        title: "Mobile Application",
        icon:MobileApplicationSvg,
        lists: [
          "IOS Development",
          "Android Development",
          "Cross-Platform Solutions",
          "App Store Optimization",
        ],
        image:mobile,
      },
    ],
  },
   {
    id: 2,
    title: "Growth Solutions",
    desc: "Helping businesses attract users, build memorable brands, and increase their digital visibility through data-driven strategies and creative storytelling.",
    cards: [
      {
        id: 1,
        title: "Digital Marketing",
        icon:DigitalMarketingSvg,
        desc:"Data-led campaigns that drive traffic,conversion, and sustainable user retention across all digital channels.",
        image:digital,
      
      },
      {
        id: 2,
        title: "SEO Optimization",
        icon:SeoSvg,
        desc:"Advanced search strategies to ensure yourproduct ranks at the top where your future customers are looking.",
        image:seo,
        
      },
      {
        id: 3,
        title: "Brand Strategy",
        icon:BrandSvg,
        desc:"Defining your voice and visual identity to create a cohesive and powerful presence in the marketplace.",
        image:brand,
      
      },
    ],
  },
   {
    id: 3,
    title: "Technology Stack",
    desc: "Reliable infrastructure that powers modern digital products. We use the latest technologies to ensure your project is scalable, secure, and lightning-fast.",
    cards: [
      {
        id: 1,
        title: "Cloud Solutions",
        icon:CLoudSvg,
        desc:"AWS, Azure, and Google Cloud infrastructure setup and management for robust global performance.",
        image:cloud,
      
      },
      {
        id: 2,
        title: "Domain & Hosting",
        icon:DomainSvg,
        desc:"Managed high-speed hosting and domain security services to keep your platform online 24/7.",
        image:web,
        
      },
      {
        id: 3,
        title: "Maintenance",
        icon:MaintenanceSvg,
        desc:"Regular updates, security patches, and performance monitoring to keep your tech stack future-proof.",
        image:mobile,
      
      },
    ],
  },
];
