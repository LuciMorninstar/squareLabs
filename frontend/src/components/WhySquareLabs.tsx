"use client";

import { assetSrc } from "@/lib/assets";

import businessImage from "@/assets/whatWeDoPage/business-focused.svg";
import transparent from "@/assets/whatWeDoPage/transparent.svg";
import userImage from "@/assets/whatWeDoPage/user-centered.svg";
import whyImg from "@/assets/whatWeDoPage/whyImg.png";

// ─── reusable feature card ───
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-row items-center gap-4
      bg-feature-bg px-4 py-3 rounded-xl">
      <div className="shrink-0">
        <img
          src={assetSrc(icon)}
          alt={title}
          className="w-7 h-7 sm:w-8 sm:h-8 object-contain "
        />
      </div>
      <div>
        <h5 className="text-primary-color uppercase mb-0.5 
          text-xs sm:text-sm">
          {title}
        </h5>
        <p className="text-text-secondary-color leading-relaxed
          text-xs sm:text-sm font-outfit">
          {description}
        </p>
      </div>
    </div>
  );
};

// ─── data array ───
const features = [
  {
    id: 1,
    icon: businessImage,
    title: "Business-Focused Solutions",
    description: "We align our technical decisions with your commercial objectives.",
  },
  {
    id: 2,
    icon: userImage,
    title: "User-Centered Design",
    description: "Products built around actual human behavior and psychology.",
  },
  {
    id: 3,
    icon: transparent,
    title: "Transparent Communication",
    description: "Real-time updates and clear milestones throughout the project life cycle.",
  },
];

// ─── main component ───
const WhySquareLabs = () => {
  return (
    <div className="w-full max-w-360 mx-auto
      px-4 sm:px-10 lg:px-15
      py-10 sm:py-16 lg:py-30
      bg-background-color">

      <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-20">

        {/* ───────── LEFT SIDE ───────── */}
        <div className="flex flex-col gap-4 sm:gap-5 w-full lg:w-[45%]">

          {/* Heading */}
          <div className="mb-1 sm:mb-2">
            <h2 className="text-text-quarternary-color mb-2 sm:mb-3">
              Why{" "}
              <span className="top-bottom-gradient">SquareLabs?</span>
            </h2>
            <p className="text-text-secondary-color leading-relaxed
              text-xs sm:text-sm lg:text-base font-outfit">
              We don't just build software; we build partnership. Our holistic
              approach ensures that every pixel and every line of code serves
              your business vision.
            </p>
          </div>

          {/* ── render all features ── */}
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}

        </div>

        {/* ───────── RIGHT SIDE — Image ───────── */}
        <div className="w-full auto lg:w-[55%] hidden lg:block  ">
          <img
            src={assetSrc(whyImg)}
            alt="SquareLabs Team"
            className="w-150 h-150 sm:h-80 lg:h-120
              object-cover rounded-2xl card-shadow"
          />
        </div>

      </div>
    </div>
  );
};

export default WhySquareLabs ;