import SecondWidthWrapper from "./SecondWidthWrapper";
import { Link } from "react-router";
import { IoArrowForward } from "react-icons/io5";
import { ourInsights } from "../constants/ourInsights";

const OurInsights = () => {
 

  return (
    <SecondWidthWrapper>
      {/* Header */}
      <div className = "w-full xl:mt-10 2xl:h-[calc(100vh-160px)]">
        <div className="flex flex-row justify-between items-center mb-8 xl:mb-14 ">
          <h1 className="text-text-quarternary-color">
            Our <span className="top-bottom-gradient">Insights</span>
          </h1>
          <Link
            to="/all-articles"
            className="group flex flex-row items-center gap-3 cursor-pointer"
          >
            <span className="text-base lg:text-lg font-outfit border-b border-primary-color text-primary-color">
              View All Articles
            </span>
            <IoArrowForward className="group-hover:translate-x-2 transition-all ease-in-out duration-200 text-primary-color" />
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10 w-full">
          {(ourInsights|| []) .map((insight) => (
            <div
              key={insight.title}
              className="relative rounded-tl-[60px] rounded-br-[60px] overflow-hidden min-h-[520px] xl:min-h-[620px] flex flex-col justify-end"
            >
              {/* Background Image */}
              <img
                src={insight.image}
                alt={insight.title}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />

              {/* absolute Dark gradient overlay — from transparent top to dark bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Content sits at the bottom */}
              <div className="relative z-10 flex flex-col gap-4 px-6 pb-8 pt-32">
                <p className="text-text-seventh-color text-sm">{insight.date}</p>
                <h3 className="text-default-color font-semibold leading-snug">{insight.title}</h3>
                <p className="text-text-seventh-color text-base lg:text-xl leading-8 line-clamp-5 ">{insight.description}</p>

                <Link
                  to={insight.link}
                  className="mt-6 group flex flex-row items-center gap-3 cursor-pointer w-max"
                >
                  <span className="text-base font-outfit border-b border-primary-color text-primary-color">
                    Read More
                  </span>
                  <IoArrowForward className="group-hover:translate-x-2 transition-all ease-in-out duration-200 text-primary-color" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SecondWidthWrapper>
  );
};

export default OurInsights;