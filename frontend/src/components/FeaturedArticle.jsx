import { useNavigate } from "react-router";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { FaArrowRight } from "react-icons/fa";
import container from "../assets/Resource/container.png";

export default function FeaturedArticle() {
  const sectionRef = useRef(null);

  const imageRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    // Initial states
    gsap.set(imageRef.current, {
      opacity: 0,
      x: -60,
      scale: 1.03,
    });

    gsap.set(badgeRef.current, {
      opacity: 0,
      x: 30,
    });

    // Whole heading animates together
    gsap.set(titleRef.current, {
      opacity: 0,
      y: 25,
    });

    gsap.set(descRef.current, {
      opacity: 0,
      x: 30,
    });

    gsap.set(buttonRef.current, {
      opacity: 0,
      x: 30,
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
          duration: 0.8,
        })

          .to(
            badgeRef.current,
            {
              opacity: 1,
              x: 0,
              duration: 0.45,
            },
            "-=0.45"
          )

          // Smooth heading animation
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
              x: 0,
              duration: 0.45,
            },
            "-=0.45"
          )

          .to(
            buttonRef.current,
            {
              opacity: 1,
              x: 0,
              duration: 0.4,
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
    <section ref={sectionRef}>
      <div className="border-none shadow-2xl p-4 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 mx-4 my-8 lg:m-20">

        {/* Image */}
        <div className="overflow-hidden rounded-2xl">
          <img
            ref={imageRef}
            src={container}
            alt="Featured Article"
            className="w-full h-64 lg:h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="py-6 px-4 lg:py-12 lg:pr-12 lg:pl-14 flex flex-col justify-center">

          <span
            ref={badgeRef}
            className="border border-green-500 rounded-full px-4 py-1 text-green-600 text-sm w-fit"
          >
            FEATURED ARTICLE
          </span>

          <h2
            ref={titleRef}
            className="text-2xl lg:text-4xl font-bold mt-5 leading-tight text-black"
          >
            How AI is transforming
            <br />
            Modern Digital Products
          </h2>

          <p
            ref={descRef}
            className="text-gray-500 mt-5 leading-7"
          >
            Discover how artificial intelligence is moving from a buzzword
            to a foundational architectural layer...
          </p>

          <button
            ref={buttonRef}
            onClick={() => navigate("/NotFoundPage")}
            className="group flex items-center gap-2 text-green-600 mt-8 w-fit"
          >
            Read Article
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
          </button>

        </div>
      </div>
    </section>
  );
}