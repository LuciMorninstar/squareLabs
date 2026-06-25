import React from "react";
import WidthWrapper from "./WidthWrapper";
import whyUsBg from "../assets/whyusbg.png";
import Business from "../assets/WhyUs/Business.png";
import engineering from "../assets/WhyUs/engineering.png";
import explorenepal from "../assets/WhyUs/explorenepal.png";
import humanCentric from "../assets/WhyUs/humanCentric.png";
import longTerm from "../assets/WhyUs/LongTerm.png";
import productThinking from "../assets/WhyUs/productThinking.png";


const WhyUs = () => {

    const whyUsCards = [
        {title:<>Product <br/> Thinking</>, icon:productThinking, desc:"We combine years of experience with cutting edge tech to deliver high performance software."},
        {title:"Engineering Excellence", icon:engineering, desc:"Every project is tailored to your need, ensuring flexibility and growth as your business expands."},
        {title:"Human-Centric Design", icon:humanCentric, desc:"We prioritize intuitive, clean, and modern UI/UX to enhance usability and enhancement"},
        {title:"Long-Term Partnership", icon:longTerm, desc:"From planning to post-launch maintenance, we guide you at every steps to ensure success. "},
        {title:"Business focused Results", icon:productThinking, desc:"With 100+ successful projects, we have a reputation for delivering quality, efficiency, and reliability.  "},
    ]
  return (
    <WidthWrapper>
      <div className="relative w-full  overflow-hidden px-5 py-8 lg:px-16 lg:py-24 lg:rounded-4xl flex flex-col gap-20">
        {/* absolute image */}
        <img
          className="absolute -z-10 inset-0 top-0 left-0 w-full h-full"
          src={whyUsBg}
          alt="whyusBg"
        />

        {/* top */}
        <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:justify-between lg:items-betwen ">
          <h1 className="text-default-color flex flex-row gap-3">
            Why <span className="top-bottom-gradient font-sora">Us?</span> 
          </h1>
          <p className="text-text-secondary-color text-lg ">
          We  help businesses scale, innovate & stay ahead. Whether it’s <br className = "hidden lg:block"/>custom applications, SaaS platforms, or AI driven solutions, we <br className = "hidden lg:block"/>craft technology that built for the future.
          </p>
        </div>

        {/* /top */}

        {/* bottom */}
        <div className ="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
            {
                whyUsCards.map((card)=>(
                    <div className = "flex flex-col gap-28 md:gap-30 xl:gap-36 px-4 py-4 rounded-4xl glassmorphism-effect">
                        {/* for icon */}
                        <div className = "size-16 md:size-20  xl:size-24  oveflow-hidden ">
                            <img src={card.icon} alt={card.title} className = 'w-full h-full object-center object-cover' />
                        </div>
                        {/* /for icon */}


                        <div className = "flex flex-col gap-4">
                            <span className = "text-default-color text-xl ">{card.title}</span> 
                            <p className = "text-text-sixth-color  text-base lg:text-lg line-clamp-3 leading-8 ">{card.desc}</p>  
                        </div>
                    </div>
                ))

            }

        </div>

        {/* /bottom */}
      </div>
    </WidthWrapper>
  );
};

export default WhyUs;
