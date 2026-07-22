"use client";

import { ourApproaches } from "@/constants/ourApproaches";
import { useEffect, useRef } from "react";
import { coreValues } from "@/constants/whoWeAreData";

const OurApproach = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll("[data-animate]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen lg:h-screen bg-background-color  w-full px-5 py-8 lg:px-16 lg:py-8 mx-auto"
    >
      {/* wrapper */}
      <div className="flex flex-col gap-8 xl:gap-8 items-center justify-center">
        {/* top section */}
        <h1 data-animate className="fade-up">
          Our Core{" "}
          <span className="top-bottom-gradient text-transparent bg-clip-text">
            Values
          </span>
        </h1>

        <div className="lg:px-40 xl:px-60 ">
          <p
            data-animate 
            className="fade-up text-text-secondary-color text-base md:text-lg lg:text-xl text-center leading-7 lg:leading-8"
          >
            "Our values shape every decision we make, from understanding user
            needs to delivering scalable digital solutions. We believe great
            products are built through collaboration, innovation, and a
            commitment to creating meaningful impact for our clients."
          </p>
        </div>
        {/* /top section ends */}

        {/* bottom section */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:px-8 xl:px-20">
          {coreValues[0]?.values?.map((value, i) => (
            <div data-animate
              className={`fade-up flex flex-col gap-4 border-b-3 border-primary-color px-8 py-6 ${
                i === 0
                  ? "lg:border-r-3 "
                  : i === 2
                    ? "lg:border-r-3 lg:border-b-0"
                    : i === 3
                      ? "lg:border-b-0"
                      : ""
              }`}
            >
              {/* for icon */}
              {/* for icon */}
              <div className="w-8 h-8 md:w-8 md:h-8 xl:w-10 xl:h-10 rounded-2xl">
                {value?.icon && <value.icon className="w-full h-full " />}
              </div>
              {/* /for icon */}
              {/* /for icon */}
              {/* title */}
              <h3 className="text-text-quarternary-color font-semibold">{value?.title}</h3>
              {/* /title */}
              <p
                className="text-text-secondary-color text-base md:text-lg lg:text-xl  leading-8"
              >
                {value?.desc}
              </p>
            </div>
          ))}
        </div>

        {/* /bottom section ends */}
      </div>
    </section>
  );
};

export default OurApproach;
