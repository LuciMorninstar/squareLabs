import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router";
import GotoSvg from "../assets/svg/gotosvg.svg?react";
import WidthWrapper from "../components/WidthWrapper";

const GREEN_A = "rgb(15,157,69)";
const GREEN_B = "rgb(140,198,63)";

const HeroSection = () => {
  const heroRef = useRef(null);
  const eyebrowRef = useRef(null);
  const heading1Ref = useRef(null);
  const heading2Ref = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);

  // ---------- GSAP load-in (text) ----------
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(eyebrowRef.current, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
        .fromTo(
          heading1Ref.current,
          { y: 70, opacity: 0, filter: "blur(8px)" },
          { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.9 },
          "-=0.25",
        )
        .fromTo(
          heading2Ref.current,
          { y: 70, opacity: 0, filter: "blur(8px)" },
          { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.9 },
          "-=0.65",
        )
        .fromTo(
          descriptionRef.current,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.35",
        )
        .fromTo(
          buttonsRef.current.children,
          { y: 20, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, stagger: 0.12, duration: 0.6, ease: "back.out(1.7)" },
          "-=0.3",
        );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <WidthWrapper>
      <div
        ref={heroRef}
        className="relative w-full min-h-[calc(100dvh-60px)] lg:min-h-[calc(100vh-80px)]
          overflow-hidden bg-white
          flex items-center"
      >

        {/* ── subtle light green radial glow — very soft ── */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 80% 50%, rgba(140,198,63,0.07) 0%, transparent 70%)",
          }}
        />

        {/* ── very subtle grid lines ── */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,157,69,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,157,69,0.04) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* ── MAIN LAYOUT ── */}
        <div className="relative z-10 w-full
          flex flex-col lg:flex-row
          items-center
          px-8 sm:px-12 lg:px-16 xl:px-24
          py-16 sm:py-20 lg:py-0
          gap-12 lg:gap-10">

          {/* ───── LEFT SIDE ───── */}
          <div className="w-full lg:w-1/2
            flex flex-col gap-6 lg:gap-8
            items-start text-left">

            {/* eyebrow label */}
            <span
              ref={eyebrowRef}
              className="inline-flex items-center gap-2
                rounded-full border border-primary-color/20
                bg-primary-color/5
                px-5 py-2 text-xs lg:text-sm
                font-outfit tracking-widest uppercase
                text-primary-color font-semibold"
            >
              <span className="w-2 h-2 rounded-full bg-primary-color animate-pulse" />
              Innovation Driven Development
            </span>

            {/* headings */}
            <div
              ref={heading1Ref}
              className="flex flex-col gap-2 lg:gap-3 text-left"
            >
              <h1 className="font-sora text-text-quarternary-color
                text-4xl sm:text-5xl lg:text-6xl xl:text-7xl
                font-bold tracking-tight leading-tight">
                Building
              </h1>
              <h1 className="font-sora
                text-4xl sm:text-5xl lg:text-6xl xl:text-7xl
                font-bold tracking-tight leading-tight
                bg-clip-text text-transparent"
                style={{ backgroundImage: `linear-gradient(120deg, ${GREEN_A}, ${GREEN_B})` }}
              >
                Digital Products
              </h1>
              <h1
                ref={heading2Ref}
                className="font-sora text-text-quarternary-color
                  text-3xl sm:text-4xl lg:text-5xl xl:text-6xl
                  font-bold tracking-tight leading-tight"
              >
                That Move Business Forward
              </h1>
            </div>

            {/* description */}
            <p
              ref={descriptionRef}
              className="max-w-lg text-text-secondary-color
                text-sm sm:text-base lg:text-lg
                font-outfit leading-relaxed"
            >
              SquareLabs designs and ships production-grade web platforms,
              stacked with precision — one solid block at a time.
            </p>

            {/* green subtext like design 2 */}
            <p className="text-primary-color font-outfit
              font-semibold text-sm sm:text-base -mt-2">
              Ready to scale your business? 🚀
            </p>

            {/* buttons */}
            <div
              ref={buttonsRef}
              className="flex flex-row flex-wrap
                gap-4 lg:gap-6 items-center"
            >
              {/* filled green button */}
              <Link
                to="/start-a-project"
                className="group inline-flex items-center gap-2
                  rounded-xl px-7 py-4 lg:px-8 lg:py-4
                  font-outfit font-medium text-base lg:text-lg
                  text-white
                  bg-tertiary-color hover:bg-primary-color
                  hover:scale-105 transition-all duration-200"
              >
                <span>Let's Talk</span>
                <IoArrowForward className="text-xl
                  group-hover:translate-x-1
                  transition-transform duration-200" />
              </Link>

              {/* outlined button */}
              <Link
                to="/explore-our-work"
                className="inline-flex items-center gap-3
                  rounded-xl
                  border-2 border-text-quarternary-color/30
                  px-7 py-4 lg:px-8 lg:py-4
                  text-text-quarternary-color font-outfit
                  font-medium text-base lg:text-lg
                  hover:border-primary-color
                  hover:text-primary-color
                  hover:scale-105
                  transition-all duration-200"
              >
                <span>Explore our Work</span>
                <GotoSvg className="w-5 h-5" />
              </Link>
            </div>

          </div>

          {/* ───── RIGHT SIDE — Interesting visual ───── */}
          <div className="hidden lg:flex w-full lg:w-1/2
  h-75 sm:h-100 lg:h-125
  items-center justify-center
            relative">

            {/* outer glow ring */}
            <div className="absolute w-[320px] h-[320px] lg:w-[420px] lg:h-[420px]
              rounded-full border border-primary-color/10
              animate-pulse" />

            {/* middle ring */}
            <div className="absolute w-[240px] h-[240px] lg:w-[320px] lg:h-[320px]
              rounded-full border border-primary-color/20" />

            {/* inner ring */}
            <div className="absolute w-[160px] h-[160px] lg:w-[220px] lg:h-[220px]
              rounded-full border border-primary-color/30" />

            {/* center green glowing circle */}
            <div className="absolute w-[80px] h-[80px] lg:w-[100px] lg:h-[100px]
              rounded-full
              flex items-center justify-center"
              style={{
                background: `radial-gradient(circle, ${GREEN_B}, ${GREEN_A})`,
                boxShadow: `0 0 40px rgba(15,157,69,0.4), 0 0 80px rgba(140,198,63,0.2)`,
              }}
            >
              {/* SquareLabs logo mark */}
              <span className="text-white font-sora font-bold text-2xl">S</span>
            </div>

            {/* floating cards around the circle */}
            {/* top card */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2
              bg-white border border-gray-100 rounded-xl
              px-4 py-2 shadow-md
              flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary-color animate-pulse" />
              <span className="text-xs font-outfit text-text-quarternary-color font-medium">
                Product Engineering
              </span>
            </div>

            {/* right card */}
            <div className=" md:hidden lg:block absolute right-0 top-1/2 -translate-y-1/2
              bg-white border border-gray-100 rounded-xl
              px-4 py-2 shadow-md
              flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary-color animate-pulse" />
              <span className="text-xs font-outfit text-text-quarternary-color font-medium">
                Full Scale
              </span>
            </div>

            {/* bottom card */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2
              bg-white border border-gray-100 rounded-xl
              px-4 py-2 shadow-md
              flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary-color animate-pulse" />
              <span className="text-xs font-outfit text-text-quarternary-color font-medium">
                First Block
              </span>
            </div>

            {/* left card */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2
              bg-white border border-gray-100 rounded-xl
              px-4 py-2 shadow-md
              flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary-color animate-pulse" />
              <span className="text-xs font-outfit text-text-quarternary-color font-medium">
                Precision Built
              </span>
            </div>

            {/* spinning dashed outer border */}
            <div
              className="absolute w-[360px] h-[360px] lg:w-[460px] lg:h-[460px]
                rounded-full border-2 border-dashed border-primary-color/10"
              style={{ animation: "spin 20s linear infinite" }}
            />

          </div>

        </div>
      </div>
    </WidthWrapper>
  );
};

export default HeroSection;