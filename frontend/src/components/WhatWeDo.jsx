import React from "react";
import SecondWidthWrapper from "./SecondWidthWrapper";
import { useState } from "react";
import GotoSvg from "../assets/svg/gotosvg.svg?react";
import { Link } from "react-router";

const WhatWeDo = () => {
  const [hoveredCardId, setHoveredCardId] = useState(1);

  const whatWeDo = [
    {
      id: 1,
      title: "Design",
      items: ["UI/UX Design", "Product Design", "Branding", "Graphic Design"],
    },
    {
      id: 2,
      title: "Build",
      items: [
        "Web Development",
        "Mobile Applications",
        "E-commerce Platforms",
        "Custorm Software",
      ],
    },
    {
      id: 3,
      title: "Scale",
      items: [
        "Cloud Solutions",
        "Domain & Hosting",
        "API Integration",
        "Maintenance & Support",
      ],
    },
    {
      id: 4,
      title: "Grow",
      items: [
        "Digital Marketing",
        "SEO Optimization",
        "Content Strategy",
        "Analytics",
      ],
    },
  ];

  return (
    <SecondWidthWrapper>
      {/* top section */}
      <div className="w-full flex flex-col gap-5 items-center">
        <h1 className="text-text-quarternary-color text-center">
          What We <span className="top-bottom-gradient">Do</span>
        </h1>
        <span className=" text-lg lg:text-xl text-center text-text-sixth-color">
          From ideas to digital products, we design,build, and grow <br />{" "}
          experiences that create impact. is broken.
        </span>

        <Link
          to="/start-a-project"
          className="flex flex-row gap-4 items-center justify-center rounded-4xl bg-primary-color px-6 py-4 w-max  "
        >
          <span className="text-default-color text-base lg:text-xl font-outfit font-light ">
            Learn More
          </span>
          <GotoSvg className="w-5 h-5 text-white" />
        </Link>
      </div>
      {/* /top section */}

      {/* bottom section */}

      <div className="w-full flex flex-row border-2 border-primary-color mt-12 lg:mt-16 min-h-80 md:min-h-100 lg:min-h-120">
        {whatWeDo.map((card) => {
          const isHovered = hoveredCardId === card.id;
          return (
            <div
              key={card.id}
              onMouseEnter={() => setHoveredCardId(card.id)}
              onMouseLeave={() => setHoveredCardId(1)}
              className={`relative overflow-hidden transition-all duration-500 ease-in-out 
  after:absolute after:right-0 after:top-0 after:bottom-0 after:w-[2px] after:bg-gradient-to-b after:from-primary-color after:to-secondary-color
  last:after:hidden
  ${isHovered ? "w-[40%] bg-quarternary-color" : "w-[20%]"}`}
            >
              <span className="absolute top-8 left-6 text-text-quarternary-color text-7xl font-semibold">
                {card.id}
              </span>

              <div
                className={`absolute bottom-8 left-6 transition-all duration-300
          ${isHovered ? "opacity-0 translate-y-3 pointer-events-none" : "opacity-100 translate-y-0"}`}
              >
                <h1 className="top-bottom-gradient">{card.title}</h1>
              </div>

              <div
                className={`absolute bottom-16 left-0 right-0 flex flex-col items-center gap-6
  transition-all duration-300 delay-100
  ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"}`}
              >
                <div className="flex flex-col items-center gap-3">
                  {card.items?.map((item) => (
                    <h4
                      key={item}
                      className="text-text-secondary-color font-outfit font-semibold"
                    >
                      {item}
                    </h4>
                  ))}
                </div>
              </div>

              <div
                className={`absolute top-14 left-0 right-0 flex justify-center transition-all duration-300 delay-100
  ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"}`}
              >
                <div className="flex flex-row items-end gap-3">
                  <span className="text-default-color font-sora font-semibold text-6xl">
                    {card.id}.
                  </span>
                  <h1 className="text-default-color font-semi">{card.title}</h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* /bottom section */}
    </SecondWidthWrapper>
  );
};

export default WhatWeDo;
