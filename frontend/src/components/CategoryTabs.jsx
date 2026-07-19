import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const tabs = [
  "All",
  "Case Study",
  "Technology & Trends",
  "Branding",
  "Marketing",
  "Content Creation",
  "Tools",
];

export default function CategoryTabs({
  selectedCategory,
  onCategoryChange,
}) {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const tabsRef = useRef([]);

  useLayoutEffect(() => {
    tabsRef.current = tabsRef.current.slice(0, tabs.length);

    gsap.set(headingRef.current, {
      opacity: 0,
      x: -40,
    });

    gsap.set(tabsRef.current, {
      opacity: 0,
      y: 25,
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const tl = gsap.timeline({
          defaults: {
            ease: "power3.out",
          },
        });

        tl.to(headingRef.current, {
          opacity: 1,
          x: 0,
          duration: 0.7,
        }).to(
          tabsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.08,
          },
          "-=0.3"
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
      <div className="w-full bg-[#1F1F26] rounded-3xl lg:rounded-full px-5 py-5">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <h2
            ref={headingRef}
            className="text-white font-semibold text-xl sm:text-2xl"
          >
            Category
          </h2>

          <div className="flex flex-wrap items-center gap-3 sm:gap-5">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                ref={(el) => (tabsRef.current[index] = el)}
                onClick={() => onCategoryChange(tab)}
                className={`rounded-full px-4 py-2 text-sm sm:text-base transition-colors duration-300 ${
  selectedCategory === tab
    ? "text-[#22C55E]"
    : "text-white hover:text-[#22C55E]"
}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}