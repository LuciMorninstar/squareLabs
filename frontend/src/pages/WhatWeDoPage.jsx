import Collaborate from '../components/Collaborate'
import OurApproach from '../components/OurApproach'
import WhatWeDoCards from '../components/WhatWeDoCards'
import WhatWeDoHero from '../components/WhatWeDoHero'
import WhatWeDoHero2 from '../components/WhatWeDoHero2'
import WhySquareLabs from '../components/WhySquareLabs'

const WhatWeDoPage = () => {
  return (
    <>s
   <WhatWeDoHero/>
   <WhatWeDoHero2/>
   <div className = "flex flex-col gap-3 ">
    {
      whatWeDoPageData.map((item)=>(
        <WhatWeDoCards key={item?.id} item={item} bgColor={item.id % 2 === 0 ? "#FFFFFF" : "#F6F8F6"}/>
      ))

    }
   </div>

      <OurApproach />
      
      <WhySquareLabs />
      <Collaborate />
    </>
  )
}

export default WhatWeDoPage