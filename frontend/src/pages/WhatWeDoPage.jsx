
<<<<<<< HEAD
import Collaborate from '../components/Collaborate'
import WhatWeDoSquarlabs from '../components/WhatDoSquareLabs'
=======

>>>>>>> 171f326562c080fcab8565f51daf59751e7ad140
import WhatWeDoHero from '../components/WhatWeDoHero'
import WhatWeDoHero2 from '../components/WhatWeDoHero2'
import WhatWeDoCards from '../components/WhatWeDoCards'
import {whatWeDoPageData} from "../constants/whatWeDoPageData"
import OurApproach from '../components/OurApproach'
import WhySquareLabs from '../components/WhySquareLabs'
import WhoIsSquareLabs from '../components/WhoIsSquareLabs'
import OurMissionAndVision from "../components/OurMissionAndVision"
import Collaborate from '../components/Collaborate'

const WhatWeDoPage = () => {
  console.log(whatWeDoPageData, "Whatwedo"
  )
  return (
    <>s
   <WhatWeDoHero/>
   <WhatWeDoHero2/>
<<<<<<< HEAD
   <WhatWeDoSquarlabs/>
   <Collaborate/>
   {/* <DigitalProducts/> */}
=======
   <div className = "flex flex-col gap-3 ">
    {
      whatWeDoPageData.map((item)=>(
        <WhatWeDoCards key={item?.id} item={item} bgColor={item.id % 2 === 0 ? "#FFFFFF" : "#F6F8F6"}/>
      ))

    }
   </div>

   <OurApproach/>
   <WhySquareLabs/>
   <Collaborate/>


   
>>>>>>> 171f326562c080fcab8565f51daf59751e7ad140
    </>
  )
}

export default WhatWeDoPage