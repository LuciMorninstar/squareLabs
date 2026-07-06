import { useRef, useEffect } from "react";
import SecondWidthWrapper from "./SecondWidthWrapper";
import { IoArrowForward, IoCheckmark } from "react-icons/io5";
import projectDelivered from "../assets/projectDelivered.png";
import yearsExperience from "../assets/yearsExperience.png";
import happyClients from "../assets/happyClients.png";
import customerSatisfaction from "../assets/customerSatisfaction.png";

import Counter from "./Counter";
import { whySquareLabs } from "../constants/whySquareLabs.js";

const WhySquareLabs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll("[data-animate]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    elements.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const points = [
    "Dedicated point of contact on every project",
    "Transparent timelines, no hidden scope creep",
    "Post-launch support that doesn't disappear after invoice",
  ];

  const whatWeDoCards = [
    {
      title: "Project Delivered",
      count: 100,
      icon: projectDelivered,
      suffix: "+",
    },
    { title: "Happy Clients", count: 50, icon: happyClients, suffix: "+" },
    {
      title: "Customer Satisfaction",
      count: 98,
      suffix: "%",
      icon: customerSatisfaction,
    },
    { title: "Years Experience", count: 5, icon: yearsExperience, suffix: "+" },
  ];

  return (
    <SecondWidthWrapper>
      <div
        ref={sectionRef}
        className="py-16 lg:py-24 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-60"
      >
        {/* left side */}
        <div className="flex flex-col gap-2 lg:gap-4 lg:p-0">
          <h1 data-animate className="text-text-quarternary-color">
            Why <span className="top-bottom-gradient">SquareLabs?</span>
          </h1>

          <p
            data-animate
            className="text-text-secondary-color text-base md:text-lg lg:text-lg text-justify"
          >
            We don't just build software, we build partnership. Our holistic
            approach ensures that every pixel and every line of code serves your
            business vision.
          </p>

          <div className="flex flex-col gap-5">
            {whySquareLabs.map((item, i) => (
              <div className="flex flex-row gap-2 bg-seventh-color rounded-2xl px-4 py-2">
                {/* for icon */}
                <div className="w-5 h-5 md:w-6 md:h-6 xl:w-8 xl:h-8 ">
                  {item?.icon && <item.icon className="w-full h-full" />}
                </div>
                <h4 className = "text-primary-color uppercase ">{item?.title}</h4>
                {/* /for icon */}

              </div>
            ))}
          </div>
        </div>

        {/* right side — each card observed individually */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 xl:gap-12">
          {whatWeDoCards.map((card) => (
            <div
              data-animate
              key={card.title}
              className="p-16 lg:p-10 flex flex-col gap-6 items-center justify-center text-center bg-background-color card-shadow rounded-3xl"
            >
              <div className="size-16 overflow-hidden">
                <img
                  src={card.icon}
                  className="w-full h-full object-cover object-center"
                  alt="card-icon"
                />
              </div>
              <h1 className="text-primary-color">
                <Counter
                  end={card.count}
                  suffix={card.suffix}
                  duration={2500}
                />
              </h1>
              <span className="text-base lg:text-lg text-text-secondary-color font-semibold">
                {card.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SecondWidthWrapper>
  );
};

export default WhySquareLabs;
