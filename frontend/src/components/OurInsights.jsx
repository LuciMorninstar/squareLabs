import SecondWidthWrapper from "./SecondWidthWrapper";
import { Link } from "react-router";
import { IoArrowForward } from "react-icons/io5";
import { ourInsights } from "../constants/ourInsights";
import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";

const OurInsights = () => {
  const sectionRef = useRef(null);
  const swiperRef = useRef(null);

  const isLargeGrid = ourInsights.length <= 3; // on xl+, use grid if 3 or fewer

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll("[data-animate]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <SecondWidthWrapper>
      <div ref={sectionRef} className="w-full xl:mt-10 2xl:h-[calc(100vh-160px)]">

        {/* Header */}
        <div data-animate className="flex flex-row justify-between items-center mb-8 xl:mb-14">
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

        {/* MOBILE & TABLET — always swiper */}
        <div data-animate className="relative w-full xl:hidden">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10
              w-10 h-10 rounded-full bg-primary-color hover:bg-primary-color/80
              text-white flex items-center justify-center
              shadow-lg transition-all duration-200 cursor-pointer"
          >
            <FaArrowLeft className="text-sm" />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10
              w-10 h-10 rounded-full bg-primary-color hover:bg-primary-color/80
              text-white flex items-center justify-center
              shadow-lg transition-all duration-200 cursor-pointer"
          >
            <FaArrowRight className="text-sm" />
          </button>

          <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            breakpoints={{
              0:   { slidesPerView: 1, spaceBetween: 16 },
              768: { slidesPerView: 2, spaceBetween: 24 },
            }}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            speed={800}
            className="w-full"
          >
            {ourInsights.map((insight) => (
              <SwiperSlide key={insight.title}>
                <InsightCard insight={insight} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* DESKTOP — grid if ≤3, swiper if >3 */}
        <div data-animate className="hidden xl:block">
          {isLargeGrid ? (
            // plain grid — no nav buttons needed
            <div className="grid grid-cols-3 gap-8">
              {ourInsights.map((insight) => (
                <InsightCard key={insight.title} insight={insight} />
              ))}
            </div>
          ) : (
            // swiper with nav buttons
            <div className="relative w-full">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10
                  w-12 h-12 rounded-full bg-primary-color hover:bg-primary-color/80
                  text-white flex items-center justify-center
                  shadow-lg transition-all duration-200 cursor-pointer"
              >
                <FaArrowLeft className="text-base" />
              </button>

              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10
                  w-12 h-12 rounded-full bg-primary-color hover:bg-primary-color/80
                  text-white flex items-center justify-center
                  shadow-lg transition-all duration-200 cursor-pointer"
              >
                <FaArrowRight className="text-base" />
              </button>

              <Swiper
                modules={[Autoplay]}
                onSwiper={(swiper) => { swiperRef.current = swiper; }}
                slidesPerView={3}
                spaceBetween={32}
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                speed={800}
                className="w-full"
              >
                {ourInsights.map((insight) => (
                  <SwiperSlide key={insight.title}>
                    <InsightCard insight={insight} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>

      </div>
    </SecondWidthWrapper>
  );
};

// extracted card so it's not repeated twice
const InsightCard = ({ insight }) => (
  <div className="relative rounded-tl-[60px] rounded-br-[60px] overflow-hidden min-h-[520px] xl:min-h-[620px] flex flex-col justify-end">
    <img
      src={insight.image}
      alt={insight.title}
      className="absolute inset-0 w-full h-full object-cover object-center"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
    <div className="relative z-10 flex flex-col gap-4 px-6 pb-8 pt-32">
      <p className="text-text-seventh-color text-sm">{insight.date}</p>
      <h3 className="text-default-color font-semibold leading-snug">{insight.title}</h3>
      <p className="text-text-seventh-color text-base lg:text-lg leading-8 line-clamp-5">
        {insight.description}
      </p>
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
);

export default OurInsights;