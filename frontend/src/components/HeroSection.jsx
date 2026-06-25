import React from 'react'
import WidthWrapper from "../components/WidthWrapper"
import heroBackground from "../assets/Background.png"
import { Link } from 'react-router'
import { IoArrowForward } from "react-icons/io5";
import GotoSvg from "../assets/svg/gotosvg.svg?react";
import { useLayoutEffect } from 'react';

const HeroSection = () => {
  return (

    <WidthWrapper>
        <div className = "relative w-full h-[calc(100dvh-75px)] lg:h-[calc(100vh-110px)] overflow-hidden flex items-center justify-center  lg:rounded-4xl">
            {/* content */}

            <div className = "max-lg:mt-5 max-xl:mt-8 xl:mt-12 w-full  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex flex-col gap-4 lg:gap-8 items-center justify-center text-center">

                {/* heading section */}
                <div className = "flex flex-col gap-1 lg:gap-4 text-center"  >
                    <h1 className = "text-default-color">Building <span className = "top-bottom-gradient font-sora  ">Digital Products</span></h1>
                    <h1 className ="text-default-color">That Move Businesses Forward.</h1>
                </div>
                {/* /heading section */}

                {/* description section */}
                <div className = "flex flex-col gap-4 justify-center text-center ">
                    <p className = "text-text-secondary-color text text-sm lg:text-base xl:text-lg">We design and develop scalable digital experiences that help startups and businesses
                        <br/> transform ideas into products users love.</p>
                    
                </div>
                {/* /description section */}

                {/* call to action buttons */}

                <div className = " flex flex-row gap-2 lg:gap-6 xl:gap-8 w-full justify-center px-3">
                    <Link  to = "/start-a-project" className = "group flex flex-row gap-2 lg:gap-4 items-center justify-center rounded-4xl bg-primary-color px-3 py-4 lg:px-6 lg:py-4 ">
                    
                    <span className = "text-default-color text-base lg:text-xl font-outfit font-light ">Start a Project</span>
                    <IoArrowForward className = "text-default-color text-3xl font-light group-hover:translate-x-3 duration-200 transition-all ease-in-out" />
                    </Link>

                    <Link  to = "/explore-our-work" className = "flex flex-row gap-2 lg:gap-4 items-center justify-center rounded-4xl border-2 border-default-color px-3 py-4 lg:px-6 lg:py-4 hover:border-text-primary-color transition-all druation-200 ease-in-out ">
                    
                    <span className = "text-default-color text-base lg:text-xl font-outfit font-light ">Explore our Work</span>
                    <GotoSvg className="w-5 h-5 text-white" />
                    
                    </Link>


                </div>


            
            {/* /call to action buttons */}


            </div>

            {/* /content */}
            
            <img src={heroBackground} className ="h-full w-full object-center object-cover" alt="heroBackground"/>
        </div>

    </WidthWrapper>
   
  )
}

export default HeroSection