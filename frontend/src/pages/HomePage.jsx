import HeroSection from '../components/HeroSection'
import OurInsights from '../components/OurInsights'
import WhatWeDo from '../components/WhatWeDo'
import TrustSection from '../components/TrustSection'
import Collaborate from '../components/Collaborate'
import Partners from '../components/Partners'
import WhyUs from '../components/WhyUs'

import TestimonialCard from '../components/TestimonialCard'
import Testimonial2 from '../components/Testimonial2'

const HomePage = () => {
  return (
    
    <section className = "flex flex-col gap-0 relative">
    <HeroSection/>
    <Partners/>
    <WhatWeDo/>
    <OurInsights/>
    <WhyUs/>
    <TrustSection/>
    {/* <TestimonialSection/> */}
    <Testimonial2/>
    <Collaborate/>
    <TestimonialCard/>
    </section>
  
  )
}

export default HomePage