import React from 'react'
import HeroSection from '../components/HeroSection'
import OurInsights from '../components/OurInsights'
import WhatWeDo from '../components/WhatWeDo'
import TrustSection from '../components/TrustSection'
import Collaborate from '../components/Collaborate'
import Partners from '../components/Partners'
import WhyUs from '../components/WhyUs'

const HomePage = () => {
  return (
    
    <section className = "flex flex-col gap-0">
    <HeroSection/>
    <Partners/>
    <WhatWeDo/>
    <OurInsights/>
    <WhyUs/>
    <TrustSection/>
    <Collaborate/>
    </section>
  
  )
}

export default HomePage