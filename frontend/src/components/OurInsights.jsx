import React from "react";
import SecondWidthWrapper from "./SecondWidthWrapper";
import { Link } from "react-router";
import { IoArrowForward } from "react-icons/io5";
import engineering from "../assets/engineering.jpg";
import future from "../assets/future.jpg";
import punchy from "../assets/punchy.jpg";

const OurInsights = () => {
  const ourInsights = [
    {
      title:
        "Future-Focused & Cutting-Edge (Best for innovation,AI,& Tech-Forward Firms",
      date: "Feb 21,2026",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo aperiam mollitia vel sit nihil est tempora illo ab alias ducimus. Consequuntur quibusdam qui quae sapiente architecto nam distinctio dignissimos laudantium? Consequuntur quibusdam qui quae sapiente architecto nam distinctio dignissimos laudantium? ",
      link: "/future",
      image: future,
    },
    {
      title:
        "Future-Focused & Cutting-Edge (Best for innovation,AI,& Tech-Forward Firms)",
      date: "Feb 21,2026",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo aperiam mollitia vel sit nihil est tempora illo ab alias ducimus. Consequuntur quibusdam qui quae sapiente architecto nam distinctio dignissimos laudantium? Consequuntur quibusdam qui quae sapiente architecto nam distinctio dignissimos laudantium? ",
      link: "/engineering",
      image: engineering,
    },
    {
      title:
        "Punchy & Dynamic (Best for Agile Agencies, Modern SaaS, or IT Consulting",
      date: "Feb 21,2026",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo aperiam mollitia vel sit nihil est tempora illo ab alias ducimus. Consequuntur quibusdam qui quae sapiente architecto nam distinctio dignissimos laudantium? Consequuntur quibusdam qui quae sapiente architecto nam distinctio dignissimos laudantium? ",
      link: "/punchy",
      image: punchy,
    },
  ];

  return (
    <SecondWidthWrapper>
      {/* topic */}
      <div className="flex flex-row justify-between mb-8">
        <h1 className="text-text-quarternary-color">
          Our <span className="top-bottom-gradient">Insights</span>
        </h1>

        <Link
          to="view-all-articles"
          className="group flex flex-row items-center justify-center gap-3 cursor-pointer"
          to="/all-articles "
        >
          <span className="text-base font-outfit border-b border-primary-color text-primary-color ">
            View All Articles
          </span>
          <IoArrowForward className="group-hover:translate-x-2 transition-all ease-in-out duration-200  text-primary-color" />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-7  w-full h-full">
        {ourInsights.map((insight) => (
          <div
            key={insight.title}
            className="relative px-5 py-5 rounded-tl-[60px] rounded-br-[60px] overflow-hidden h-max"
          >
            {/* background Image */}
            <img
              className="w-full h-full absolute top-0 left-0 object-cover object-center -z-10"
              src={insight.image}
              alt="backgroundImage"
            />
            {/* /background Image */}
            {/* content */}
            <div className="pt-32 flex flex-col gap-4">
              <p className="text-text-fifth-color">{insight.date}</p>
              <h4>{insight.title}</h4>
              <p className = "text-text-fifth-color text-base leading-7">{insight.description}</p>
            </div>
            {/* /content */}

            <Link
              to={insight.link}
              className="mt-20 group flex flex-row items-center justify-start gap-3 cursor-pointer"
              to="/all-articles "
            >
              <span className="text-base font-outfit border-b border-primary-color text-primary-color ">
                Read More
              </span>
              <IoArrowForward className="group-hover:translate-x-2 transition-all ease-in-out duration-200  text-primary-color" />
            </Link>
          </div>
        ))}
      </div>
    </SecondWidthWrapper>
  );
};

export default OurInsights;
