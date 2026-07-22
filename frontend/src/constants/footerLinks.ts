 import insta from "@/assets/footer/insta.svg";
 import facebook from "@/assets/footer/facebook.svg";
 import twitter from "@/assets/footer/twitter.svg";
 import linkedIn from "@/assets/footer/linkedIn.svg";
 
 export const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", url: "/about-us" },
        { name: "Career", url: "/career" },
        { name: "Meet the Team", url: "/meet-the-team" },
        { name: "Partners", url: "/partners" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Digital Products", url: "/digital-products" },
        { name: "Growth & Branding", url: "/growth-and-branding" },
        { name: "Strategies", url: "/strategies" },
        { name: "Technology", url: "/technology" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blogs & Insights", url: "/blogs-and-insights" },
        { name: "Case Studies", url: "/case-studies" },
        { name: "Tutorials", url: "/tutorials" },
        { name: "Academy", url: "/academy" },
      ],
    },
    {
      title: "General",
      links: [
        { name: "Home", url: "/" },
        { name: "What We Do", url: "/what-we-do" },
        { name: "Who We Are", url: "/who-we-are" },
        { name: "Our Works", url: "/our-work" },
      ],
    },
  ];

export const socialLinks = [
    { name: "facebook", icon: facebook, href: "/facebook" },
    { name: "insta", icon: insta, href: "/insta" },
    { name: "x", icon: twitter, href: "/x" },
    { name: "linkedIn", icon: linkedIn, href: "/linkedIn" },
  ];