import React from 'react'
import WidthWrapper from "../components/WidthWrapper"
import heroBackground from "../assets/Background.png"
import { Link } from 'react-router'
import { IoArrowForward } from "react-icons/io5";
import GotoSvg from "../assets/svg/gotosvg.svg?react";

const HeroSection = () => {
  return (

    <WidthWrapper>
        <div className = "relative w-full h-screen overflow-hidden rounded-4xl">
            {/* content */}

            <div className = " absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex flex-col gap-8 items-center justify-center text-center">

                {/* heading section */}
                <div className = "flex flex-col gap-4 text-center"  >
                    <h1 className = "text-default-color">Building <span className = "top-bottom-gradient font-sora  ">Digital Products</span></h1>
                    <h1 className ="text-default-color">That Move Businesses Forward.</h1>
                </div>
                {/* /heading section */}

                {/* description section */}
                <div className = "flex flex-col gap-4 justify-center text-center ">
                    <span className = "text-text-secondary-color text text-sm lg:text-base">We design and develop scalable digital experiences that help startups and businesses
                        <br/> transform ideas into products users love.</span>
                    
                </div>
                {/* /description section */}

                {/* call to action buttons */}

                <div className = "flex flex-row gap-4 lg:gap-6 xl:gap-8">
                    <Link  to = "/start-a-project" className = "flex flex-row gap-4 items-center justify-center rounded-4xl bg-primary-color px-6 py-4 ">
                    
                    <span className = "text-default-color text-base lg:text-xl font-outfit font-light ">Start a Project</span>
                    <IoArrowForward className = "text-default-color text-3xl font-light" />
                    </Link>

                    <Link  to = "/explore-our-work" className = "flex flex-row gap-4 items-center justify-center rounded-4xl border-2 border-default-color px-6 py-4 ">
                    
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