"use client";

import { assetSrc } from "@/lib/assets";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { FaArrowRight } from "react-icons/fa";
import container from "@/assets/Resource/Backgroundd.png";

export default function FeaturedArticle() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const imageRef = useRef<HTMLImageElement | null>(null);
  const tagsRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useLayoutEffect(() => {
    gsap.set(imageRef.current, {
      opacity: 0,
      x: -60,
      scale: 1.03,
    });

    gsap.set(tagsRef.current, {
      opacity: 0,
      x: 30,
    });

    // Whole title animation
    gsap.set(titleRef.current, {
      opacity: 0,
      y: 30,
    });

    gsap.set(descRef.current, {
      opacity: 0,
      y: 20,
    });

    gsap.set(buttonRef.current, {
      opacity: 0,
      y: 20,
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const tl = gsap.timeline({
          defaults: {
            ease: "power2.out",
          },
        });

        tl.to(imageRef.current, {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.9,
        })

          .to(
            tagsRef.current,
            {
              opacity: 1,
              x: 0,
              duration: 0.45,
            },
            "-=0.45"
          )

          // Smooth title animation
          .to(
            titleRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
            },
            "-=0.15"
          )

          .to(
            descRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 0.55,
            },
            "-=0.45"
          )

          .to(
            buttonRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 0.45,
            },
            "-=0.35"
          );

        observer.unobserve(entry.target);
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="my-10">
      <div className="rounded-3xl overflow-hidden grid lg:grid-cols-2 gap-10 items-center p-4">

        {/* Image */}
        <div className="overflow-hidden rounded-3xl">
          <img
            ref={imageRef}
            src={assetSrc(container)}
            alt="Global Neo Bank Ecosystem"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="py-8 lg:py-12 lg:pr-12 lg:pl-2 flex flex-col justify-center">

          {/* Tags */}
         <div
  ref={tagsRef}
  className="flex justify-start gap-3 flex-wrap"
>
  <span
    className="
      border border-gray-400
      rounded-full
      px-4 py-1
      text-gray-700
      text-sm
      cursor-pointer
      transition-all
      duration-300
      hover:border-green-500
      hover:text-green-500
    "
  >
    FINTECH
  </span>

  <span
    className="
      border border-black
      rounded-full
      px-4 py-1
      text-black
      text-sm
      cursor-pointer
      transition-all
      duration-300
      hover:border-green-500
      hover:text-green-500
    "
  >
    UI/UX
  </span>
</div>
          {/* Title */}
          <h2
            ref={titleRef}
            className="text-3xl lg:text-5xl font-bold text-black mt-6 leading-tight"
          >
            Global Neo Bank Ecosystem
          </h2>

          {/* Description */}
          <p
            ref={descRef}
            className="text-gray-500 mt-6 text-base lg:text-lg leading-8"
          >
            Designing a seamless cross-platform banking experience for the next
            generation of digital nomads, focusing on instant currency exchange
            and social payments.
          </p>

          {/* Button */}
          <button
            ref={buttonRef}
            className="group flex items-center gap-3 text-green-600 mt-8 w-fit font-medium"
          >
            Read Article
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
          </button>

        </div>
      </div>
    </section>
  );
}