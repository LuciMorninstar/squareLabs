import SecondWidthWrapper from "./SecondWidthWrapper";
import { IoArrowForward, IoCheckmark } from "react-icons/io5";
import projectDelivered from "../assets/projectDelivered.png";
import yearsExperience from "../assets/yearsExperience.png";
import happyClients from "../assets/happyClients.png";
import customerSatisfaction from "../assets/customerSatisfaction.png";
import { Link } from "react-router";
import Counter from "./Counter"

const TrustSection = () => {
  const points = [
    "Dedicated point of contact on every project",
    "Transparent timelines, no hidden scope creep",
    "Post-launch support  that doesn't disappear after invoice",
  ];


  const whatWeDoCards = [
    { title: "Project Delivered", count: 100, icon: projectDelivered,suffix:"+" },
    { title: "HappyClients", count: 50, icon: happyClients, suffix:"+" },
    {
      title: "Customer Satisfaction",
      count: 98,
      suffix:"%",
      icon: customerSatisfaction,
    },
    { title: "Years Experience", count: 5, icon: yearsExperience, suffix:"+" },
  ];

  return (
    <SecondWidthWrapper>
      <div className=" py-16 lg:py-42   w-full  grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-60">
        {/* left side */}
        <div className=" flex flex-col gap-2 lg:gap-4 lg:p-0  ">
          <h1 className="text-text-quarternary-color">
            Trusted By Businesses <br /> Driven By{" "}
            <span className="top-bottom-gradient">Digital Innovation</span>
          </h1>

          <p className="text-text-secondary-color text-base md:text-lg  lg:text-xl text-justify">
            With years of experience delivering digital solutions, Square Labs
            helps businesses navigate the challenges of modern technology. Our
            team combines design thinking, development expertise, and strategic
            insights to create solutions that deliver measurable results.
          </p>
          <p className="text-text-secondary-color text-base md:text-lg lg:text-xl text-justify">
            We've delivered 100+ projects across hospitality, education,
            e-commerce, and financial services. Before we open a design file or
            write a line of code, we ask: what does success actually look like
            for you?
            </p>
            <ul className="mt-1 flex flex-col gap-1 ">
              {points.map((point) => (
                <li key={point} className="flex flex-row items-center text-text-secondary-color text-base md:text-lg lg:text-xl">
                  <IoCheckmark className ="text-xl" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          

          {/* for button */}

          <Link
            to="/story"
            className=" group w-max mt-2 lg:mt-6 flex flex-row gap-4 items-center justify-center rounded-4xl bg-primary-color px-6 py-4 "
          >
            <span className="text-default-color text-base lg:text-xl font-outfit font-light ">
              Read Our Story
            </span>
            <IoArrowForward className="group-hover:translate-x-3 transition-all duration-200 ease-in-out text-default-color text-3xl font-light " />
          </Link>
        </div>
        {/* /left side */}

        {/* right side */}

        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6 xl:gap-12">
          {whatWeDoCards.map((card) => (
            <div key={card.title} className="p-16 lg:p-10 flex flex-col gap-6 items-center justify-center text-center bg-fifth-color card-shadow rounded-3xl">
              {/* for icon */}
              <div className="size-16 overflow-hidden ">
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

        {/* /right side */}
      </div>
    </SecondWidthWrapper>
  );
};

export default TrustSection;
