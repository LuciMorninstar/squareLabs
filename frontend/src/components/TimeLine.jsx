import { useRef, useEffect } from "react";
import SecondWidthWrapper from "./SecondWidthWrapper";
import { IoArrowForward, IoCheckmark } from "react-icons/io5";
import projectDelivered from "../assets/projectDelivered.png";
import yearsExperience from "../assets/yearsExperience.png";
import happyClients from "../assets/happyClients.png";
import customerSatisfaction from "../assets/customerSatisfaction.png";
import { Link } from "react-router";
import Counter from "./Counter";

const TimeLine = () => {
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
      { threshold: 0.2 }
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
    { title: "Project Delivered", count: 100, icon: projectDelivered, suffix: "+" },
    { title: "Happy Clients", count: 50, icon: happyClients, suffix: "+" },
    { title: "Customer Satisfaction", count: 98, suffix: "%", icon: customerSatisfaction },
    { title: "Years Experience", count: 5, icon: yearsExperience, suffix: "+" },
  ];

  return (
    <SecondWidthWrapper>
      <div
        ref={sectionRef}
        className="h-[100dvh] lg:h-screen py-16 lg:py-24 w-full flex flex-row justify-center items-center gap-8 lg:gap-16 xl:gap-60 "
      >
        {/* left side */}
        <div className="w-1/2 flex flex-col gap-2 lg:gap-4 lg:p-0">
          <h1 data-animate className="text-text-quarternary-color">
            From Ideas To {" "} 
            <span className="top-bottom-gradient">Digital Reality</span>
          </h1>

          <p data-animate className="text-text-secondary-color text-base md:text-lg lg:text-xl text-justify">
          Square Labs started with a vision to help businesses use technology to solve real problems. What began as a small collective of engineering enthusiasts has grown into a premier digital hub that bridges the gap between complex code and user-centric experiences.
          </p>

        {/* note section */}
          <div className = "bg-seventh-color border-l-6 border-primary-color px-6 py-5">
            <p className = "text-text-secondary-color">
                "Our mission isn't just to write code; it's to architect the infrastructure of future business successes."
            </p>

          </div>


          <Link
            data-animate
            to="/story"
            className="group w-max mt-2 lg:mt-6 flex flex-row gap-4 items-center justify-center rounded-4xl bg-primary-color px-6 py-4"
          >
            <span className="text-default-color text-base lg:text-xl font-outfit font-light">
              Read Our Story
            </span>
            <IoArrowForward className="group-hover:translate-x-3 transition-all duration-200 ease-in-out text-default-color text-3xl font-light" />
          </Link>
        </div>

        {/* right side — each card observed individually */}
        <div className="w-1/2 ">
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
                <Counter end={card.count} suffix={card.suffix} duration={2500} />
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

export default TimeLine;