"use client";

import HeroSection from "@/components/HeroSection";
import OurInsights from "@/components/OurInsights";
import WhatWeDo from "@/components/WhatWeDo";
import TrustSection from "@/components/TrustSection";
import Collaborate from "@/components/Collaborate";
import Partners from "@/components/Partners";
import WhyUs from "@/components/WhyUs";
import Testimonial2 from "@/components/Testimonial2";

export default function HomePage() {
  return (
    <section className="flex flex-col gap-0 relative">
      <HeroSection />
      <Partners />
      <WhatWeDo />
      <OurInsights />
      <WhyUs />
      <TrustSection />
      <Testimonial2 />
      <Collaborate />
    </section>
  );
}
