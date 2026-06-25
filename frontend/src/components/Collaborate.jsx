import React from "react";
import WidthWrapper from "./WidthWrapper";
import collabBg from "../assets/collabBg.png";
import { Link } from "react-router";
import { IoArrowForward } from "react-icons/io5";

const Collaborate = () => {
  return (
    <WidthWrapper>
      <div className="relative bg-red-500 w-full py-26 flex flex-col gap-5 items-center justify-center text-center rounded-3xl overflow-hidden">
        {/* absolute bg */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <img
            src={collabBg}
            alt="bg"
            className="w-full h-full object-center object-cover"
          />
        </div>
        {/* /absolute bg */}

        {/* content */}
        <div className="relative flex flex-col items-center gap-5">
          <h1 className="text-default-color">
            Let's <span className="top-bottom-gradient">Collaborate</span> &
            Create
          </h1>
          <h1 className="text-default-color"> Something Amazing</h1>
          <p className="text-text-secondary-color text text-base lg:text-lg mt-2">
            We design and develop scalable digital experiences that help
            startups and businesses
            <br /> transform ideas into products users love.
          </p>

          <Link
            to="/start-a-project"
            className="group flex flex-row gap-4 items-center justify-center rounded-4xl bg-primary-color px-6 py-4 w-max mt-4 "
          >
            <span className="text-default-color text-base lg:text-xl font-outfit font-light ">
              Start a Project
            </span>
            <IoArrowForward className="text-default-color text-3xl font-light group-hover:translate-x-3 duration-200 transition-all ease-in-out" />
          </Link>
        </div>
        {/* /content */}
      </div>
    </WidthWrapper>
  );
};

export default Collaborate;
