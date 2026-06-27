import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'swiper/css';

import TestimonialCard from './TestimonialCard';
import { Autoplay } from "swiper/modules";

import { testimonials } from '../constants/testimonials';

const Testimonial2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <section className="bg-default-color flex flex-col gap-8 sm:gap-12 lg:gap-16 xl:gap-20 pt-6 xl:pt-16  xl:h-screen">

      <div className="flex flex-col gap-1 lg:gap-4 pl-8 lg:pl-16">
        <h1 className="text-text-quarternary-color font-sora font-semibold">
          What <span className="top-bottom-gradient">Our Clients Say</span>
        </h1>
        <h1 className="text-text-quarternary-color font-sora font-semibold">
          About Working With Us
        </h1>
      </div>

      <div className="relative w-full px-14 pb-16 overflow-hidden">

        <button
          onClick={() => swiperInstance?.slidePrev()}
          className="absolute left-2 top-[45%] -translate-y-1/2 z-10 w-12 h-12  rounded-full bg-text-primary-color hover:bg-primary-color cursor-pointer text-white flex items-center justify-center shadow-md transition-colors"
        >
          <FaArrowLeft />
        </button>

        <button
          onClick={() => swiperInstance?.slideNext()}
          className="absolute right-2 top-[45%] -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-text-primary-color hover:bg-primary-color cursor-pointer text-white flex items-center justify-center shadow-md transition-colors"
        >
          <FaArrowRight />
        </button>

        <Swiper
          slidesPerView="auto"
          centeredSlides={true}
          spaceBetween={12}
          loop={true}
         
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={(swiper) => {
            setSwiperInstance(swiper);
            setActiveIndex(swiper.realIndex);
          }}
          modules={[Autoplay]}
          speed={1800}
          effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{delay:4000, disableOnInteraction:true, waitForTransition: false,}}
          className="testimonial-swiper"
        >
          {(testimonials || []).map((item, index) => (
            <SwiperSlide key={item.id} className="testimonial-slide">
              <TestimonialCard item={item} isActive={index === activeIndex} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex items-center justify-center gap-2 mt-7">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`h-3 rounded-full bg-green-500 transition-all duration-300
                ${index === activeIndex ? 'w-7 opacity-100' : 'w-3 opacity-35'}
              `}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonial2;