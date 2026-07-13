import { IoArrowForward } from "react-icons/io5";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import WidthWrapper from "../components/WidthWrapper";
import { Link } from "react-router";
import OurWorkbgImage from "../assets/ourWorkPage/OurWorkbgImage.png";

const EPlatformRedesign = () => {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);

  // entrance animation
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.fromTo(
        headingRef.current,
        { y: 60, opacity: 0, filter: "blur(10px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 1 },
      )
        .fromTo(
          descriptionRef.current,
          { y: 30, opacity: 0, filter: "blur(10px)" },
          { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.8 },
          "-=0.5",
        )
        .fromTo(
          buttonsRef.current.children,
          { y: 25, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.7)" },
          "-=0.35",
        )
        .fromTo(
          imageRef.current,
          { y: 60, opacity: 0, scale: 0.94 },
          { y: 0, opacity: 1, scale: 1, duration: 1 },
          "-=0.9",
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // cursor-follow spotlight
  useLayoutEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--mx", `${x}%`);
      el.style.setProperty("--my", `${y}%`);
    };

    el.addEventListener("mousemove", handleMove);
    return () => el.removeEventListener("mousemove", handleMove);
  }, []);

  const cards = [
    {id:1, title:"User Engagement", value:45, desc:"Active session per user"},
    {id:2, title:"Conversion Rate", value:30, desc:"Mobile checkout sucess"},
    {id:3, title:"Core Web Vitals", value:2, desc:"Faster Experience"},
  ]

  return (
    <WidthWrapper>
      <div
        ref={heroRef}
        className="relative w-full h-[calc(100dvh-60px)] lg:h-[calc(100vh-110px)] overflow-hidden flex flex-col lg:flex-row lg:rounded-4xl py-10 lg:py-0"
      >
        {/* base gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 50% 0%, rgba(15,157,69,0.18) 0%, rgba(7,21,16,0) 55%), linear-gradient(180deg, #081B13 0%, #071510 60%, #050F0B 100%)",
          }}
        />

        {/* cursor-follow spotlight */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(420px circle at var(--mx, 50%) var(--my, 30%), rgba(140,198,63,0.13), transparent 70%)",
          }}
        />

        {/* left content */}
        <div className="relative z-10  h-full w-full lg:w-1/2 flex flex-col max-lg:items-center  gap-4 lg:gap-8 justify-center px-6 lg:px-12 text-left order-2 lg:order-1 ">
          <div className="flex flex-col gap-3">
            <h3 className="top-bottom-gradient font-semibold uppercase">
              Spotlight Project
            </h3>
            <h1 ref={headingRef} className="text-default-color">
              E-commerce Platform{" "}
              <span className="">Redesign</span>
            </h1>
          </div>

          <div className = "flex flex-col gap-3">
            <h3 className="top-bottom-gradient font-semibold uppercase">
              The Problem
            </h3>
            <p
              ref={descriptionRef}
              className="text-text-eight-color text-sm  lg:text-base xl:text-lg w-full "
            >
              Building digital experiences that solve real business problems.
              From websites to mobile apps, we design and develop solutions that
              create measurable impact.
            </p>
          </div>
          <div className = "flex flex-col gap-3">
            <h3 className="top-bottom-gradient font-semibold uppercase">
              The Solutions
            </h3>
            <p
              ref={descriptionRef}
              className="text-text-eight-color text-sm  lg:text-base xl:text-lg w-full "
            >
              Building digital experiences that solve real business problems.
              From websites to mobile apps, we design and develop solutions that
              create measurable impact.
            </p>
          </div>
        </div>
        {/* /left content */}

        {/* right content — single composited mockup image */}
        <div className="relative z-10 w-full lg:w-1/2 flex items-center justify-center  order-1 lg:order-2 grid flex flex-col gap-4 lg:gap-6">
        {/* top cards */}
        <div className = "grid grid-cols-2">


        </div>
        {/* /top cards */}
        
        </div>
        {/* /right content */}
      </div>
    </WidthWrapper>
  );
};

export default EPlatformRedesign;
