
import rajdoot from "../assets/partners/rajdoot.png"
import yarshakhabar from "../assets/partners/yarshakhabar.png"
import aakhyan from "../assets/partners/aakhyan.png"
import sparkleentertainment from "../assets/partners/explorenepal.png"
import suchanalogo from "../assets/partners/suchanalogo.png"
import uttarganga from "../assets/partners/uttarganga.png"
import vseries from "../assets/partners/vseries.png"


import explorenepal from "../assets/partners/explorenepal.png"
import WidthWrapper from './WidthWrapper'



const Partners = () => {
    const partners = [
        {name:"Rajdoot", logo:rajdoot },
        {name:"aakhyan", logo:aakhyan},
        {name:"sparkleentertainment", logo:sparkleentertainment},
        {name:"suchanalogo", logo:suchanalogo},
        {name:"uttarganga", logo:uttarganga},
        {name:"yarshakhabar", logo:yarshakhabar},
        {name:"explorenepal", logo:explorenepal},
        {name:"vseries", logo:vseries},

        
    ]
  return (
    <WidthWrapper>
        <div className = "w-full overflow-hidden  py-4 lg:py-8 xl:py-10">
              <div className="card-container w-max ">
    {[...partners, ...partners].map((partner) => (
      <div key={partner.name} className = " w-max  h-20  lg:w-max lg:h-24  xl:h-28 ">
        <img src={partner.logo} className = "grayscale-100 hover:grayscale-0 opacity-50 hover:opacity-100 w-full h-full transition-all duration-200 ease-in-out" alt={partner.name}/>
      </div>  
    ))}
  </div>


        </div>

    </WidthWrapper>
  )
}

export default Partners