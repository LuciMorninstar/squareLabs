import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import "swiper/css/pagination";



import "swiper/css";
import "swiper/css/pagination";

import TestimonialCard from "./TestimonialCard";

const TestimonialSlider = ({ testimonials }) => {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  return (
    <div className="relative w-full bg-blue-500 py-5">
      <Swiper
        modules={[Navigation, Pagination]}
        centeredSlides={true}
        loop={true}
        navigation={{ prevEl, nextEl }}
        pagination={{
         clickable:true
        }}
        breakpoints={{
          0:    { slidesPerView: 1,    spaceBetween: 16 },
          640:  { slidesPerView: 1.15, spaceBetween: 20 },
          1024: { slidesPerView: 1.3,  spaceBetween: 24 },
        }}
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            {({ isActive }) => (
              <TestimonialCard item={item} isActive={isActive} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Left Arrow */}
<button
  ref={setPrevEl}
  aria-label="Previous"
  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-text-primary-color flex items-center justify-center"
>
  <FaArrowLeftLong className="text-default-color" />
</button>

{/* Right Arrow */}
<button
  ref={setNextEl}
  aria-label="Next"
  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-text-primary-color flex items-center justify-center"
>
  <FaArrowRightLong className="text-default-color" />
</button>



<style>{`
  .testimonial-dot {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 9999px;
    background: rgba(255,255,255,0.25);
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .testimonial-dot-active {
    width: 40px;
    height: 12px;
    border-radius: 9999px;
    background: var(--primary-color);
  }
`}</style>


    </div>
  );
};

export default TestimonialSlider;