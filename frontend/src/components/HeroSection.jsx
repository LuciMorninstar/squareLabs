import WidthWrapper from "../components/WidthWrapper";
import heroBackground from "../assets/Background.png";
import { Link } from "react-router";
import { IoArrowForward } from "react-icons/io5";
import GotoSvg from "../assets/svg/gotosvg.svg?react";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

const HeroSection = () => {
  const heroRef = useRef(null);
  const backgroundRef = useRef(null);
  const heading1Ref = useRef(null);
  const heading2Ref = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
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

        // Heading line 1
        .fromTo(
          heading1Ref.current,
          {
            y: 80,
            opacity: 0,
            filter: "blur(10px)",
            scale:0.6
          },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            scale:1
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
            scale:0.6
          },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            scale:1
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
        scale:1.1,
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
        className="relative w-full h-[calc(100dvh-75px)] lg:h-[calc(100vh-110px)] overflow-hidden flex items-center justify-center lg:rounded-4xl"
      >
        {/* bg image — absolute */}
        <img
          ref={backgroundRef}
          src={heroBackground}
          className="absolute inset-0 w-full h-full object-cover object-center"
          alt="heroBackground"
        />

        {/* content */}
        <div className="max-sm:mt-16 relative z-10 w-full flex flex-col gap-4 lg:gap-8 items-center justify-center text-center px-4">
          {/* heading */}
          <div className="flex flex-col gap-1 lg:gap-4 text-center">
            <h1 ref={heading1Ref} className="text-default-color">
              Building{" "}
              <span className="top-bottom-gradient font-sora">
                Digital Products
              </span>
            </h1>
            <h1 ref={heading2Ref} className="text-default-color">
              That Move Businesses Forward.
            </h1>
          </div>

          {/* description */}
          <p
            ref={descriptionRef}
            className="text-text-secondary-color text-sm lg:text-base xl:text-lg"
          >
            We design and develop scalable digital experiences that help
            startups and businesses
            <br /> transform ideas into products users love.
          </p>

          {/* cta buttons */}
          <div
            ref={buttonsRef}
            className="flex flex-col max-sm:gap-4 items-center sm:flex-row gap-2 lg:gap-6 xl:gap-8 w-full justify-center px-3"
          >
            <Link
              to="/start-a-project"
              className="w-max group flex flex-row gap-2 lg:gap-4 items-center justify-center rounded-4xl bg-primary-color px-3 py-3 sm:py-4 lg:px-6 lg:py-4"
            >
              <span className="text-default-color text-base lg:text-xl font-outfit font-light">
                Start a Project
              </span>
              <IoArrowForward className="text-default-color text-3xl font-light group-hover:translate-x-3 duration-200 transition-all ease-in-out" />
            </Link>

            <Link
              to="/explore-our-work"
              className="w-max flex flex-row gap-2 lg:gap-4 items-center justify-center rounded-4xl border-2 border-default-color px-3 py-3 sm:py-4 lg:px-6 lg:py-4 hover:border-text-primary-color transition-all duration-200 ease-in-out"
            >
              <span className="text-default-color text-base lg:text-xl font-outfit font-light">
                Explore our Work
              </span>
              <GotoSvg className="w-5 h-5 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </WidthWrapper>
  );
};

export default HeroSection;
