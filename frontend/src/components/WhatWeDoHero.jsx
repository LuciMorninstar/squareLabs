import { IoRocketOutline } from "react-icons/io5";
import { RxDotFilled } from "react-icons/rx";

import GotoSvg from "../assets/svg/gotosvg.svg?react";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import WidthWrapper from "../components/WidthWrapper";
import { Link } from "react-router";
import whatWeDoBg from "../assets/whatWeDoPage/whatWeDoBg.jpg";

const WhatWeDoHero = () => {

  const heroRef = useRef(null);
  const ourCapabilitiesRef = useRef(null);
  const backgroundRef = useRef(null);
  const heading1Ref = useRef(null);
  const heading2Ref = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
      });

      // Background
      tl.fromTo(
        backgroundRef.current,
        {
          scale: 1.15,
          y: 40,
          opacity: 0,
        },
        {
          scale: 1,
          y: 0,
          opacity: 1,
          duration: 1.8,
        },
      )
      .fromTo(
          ourCapabilitiesRef.current,
          {
            y: 80,
            opacity: 0,
            filter: "blur(10px)",
            scale: 0.6,
          },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            scale: 1,
          },
          "-=1.4",
        )

        // Heading line 1
        .fromTo(
          heading1Ref.current,
          {
            y: 80,
            opacity: 0,
            filter: "blur(10px)",
            scale: 0.6,
          },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            scale: 1,
          },
          "-=1.4",
        )

        // Heading line 2
        .fromTo(
          heading2Ref.current,
          {
            y: 80,
            opacity: 0,
            filter: "blur(10px)",
            scale: 0.6,
          },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            scale: 1,
          },
          "-=0.8",
        )

        // Description
        .fromTo(
          descriptionRef.current,
          {
            y: 30,
            opacity: 0,
            filter: "blur(10px)",
          },
          {
            y: 0,
            filter: "blur(0px)",
            opacity: 1,
            duration: 0.8,
          },
          "-=0.1",
        )

        // Buttons
        .fromTo(
          buttonsRef.current.children,
          {
            y: 25,
            opacity: 0,
            scale: 0.95,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.12,
            duration: 0.7,
            ease: "back.out(1.7)",
          },
          "-=0.35",
        );

      // Continuous floating background
      gsap.to(backgroundRef.current, {
        // y: -15,
        duration: 6,
        scale: 1.1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <WidthWrapper>
      <div
        ref={heroRef}
        className="relative w-full h-[calc(100dvh-60px)] lg:h-[calc(100vh-185px)] overflow-hidden flex items-center justify-center lg:rounded-4xl"
      >
        {/* Green Overlay */}
        <div className="absolute inset-0 bg-[#06150D]/45 z-10"></div>
        {/* bg image — absolute */}
        <div className="absolute inset-0 w-full h-full bg-[#06150D]/50">
          <img
            ref={backgroundRef}
            src={whatWeDoBg}
            className="absolute  inset-0 w-full h-full object-cover object-center"
            alt="heroBackground"
          />
        </div>

        {/* content */}
        <div className="max-sm:mt-16 relative z-10 w-full flex flex-col gap-4 lg:gap-12 items-center justify-center text-center px-4">
          {/* our capabilities */}
          <div ref={ourCapabilitiesRef} className="flex flex-row gap-0 items-center justify-center bg-fifth-color/90 px-3 py-2 rounded-4xl border border-text-primary-color mb-3">
            <div className="relative flex items-center justify-center w-6 h-6">
              {/* Ping */}
              <span className="absolute inline-flex h-4 w-4 rounded-full bg-text-primary-color opacity-70 animate-ping"></span>

              {/* Dot */}
              <RxDotFilled className="relative z-10 text-text-primary-color text-3xl animate-pulse" />
            </div>

            <span className="text-base lg:text-lg text-text-primary-color">
              Our Capabilities
            </span>
          </div>
          {/* heading */}
          <div className="flex flex-col gap-1 lg:gap-4 text-center">
            <h1 ref={heading1Ref} className="text-default-color">
              What We{" "}
              <span className="top-bottom-gradient text-transparent bg-clip-text font-sora">
                Do
              </span>
            </h1>
          </div>

          {/* description */}
          <p
            ref={descriptionRef}
            className="text-text-eight-color text-sm lg:text-base xl:text-lg"
          >
            Build Digital Experiences That Help Businesses Grow. From
            <br className ="hidden lg:block" /> strategy and design to development and growth, we create
            scalable digital.
            <br className = "hidden lg:block" /> solutions that turn ideas into reality.
          </p>

          {/* cta buttons */}
          <div
            ref={buttonsRef}
            className="w-full  flex flex-row max-sm:gap-2 items-center sm:flex-row gap-2 sm:gap-6 lg:gap-6 xl:gap-8  justify-center px-3"
          >
            <Link to="/start-a-project" className="group button-style">
              <span className="text-default-color text-base lg:text-xl font-outfit font-light">
                Start a Project
              </span>
              <IoRocketOutline className="text-default-color text-2xl sm:text-3xl font-light group-hover:translate-x-2 group-hover:-translate-y-2 duration-200 transition-all ease-in-out" />
            </Link>

            <Link
              to="/case-studies"
              className="w-max flex flex-row gap-2 lg:gap-4 items-center justify-center rounded-4xl border-2 border-default-color px-3 py-4 sm:py-4 lg:px-6 lg:py-4 hover:border-text-primary-color transition-all duration-200 ease-in-out"
            >
              <span className="text-default-color text-base lg:text-xl font-outfit font-light">
                 Case Studies
              </span>
              <GotoSvg className="w-5 h-5 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </WidthWrapper>
  );
};

export default WhatWeDoHero;
