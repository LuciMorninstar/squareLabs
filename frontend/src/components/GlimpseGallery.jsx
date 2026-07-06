
import first from "../assets/whoWeAre/first.jpg"
import second from "../assets/whoWeAre/second.jpg"
import third from "../assets/whoWeAre/third.jpg"


const GlimpseGallery = () => {
  return (

     <div className="grid grid-cols-2 grid-rows-2 gap-x-3 w-full max-w-xl mx-auto p-2 rounded-3xl bg-white shadow-sm">
      {/* Top left */}
      <div className="rounded-2xl overflow-hidden aspect-square ">
        <img
          src={first}
          alt="Working in office"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Top right */}
      <div className="rounded-2xl overflow-hidden aspect-square ">
        <img
          src={second}
          alt="Team collaborating"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bottom - spans both columns */}
      <div className="col-span-2 rounded-2xl overflow-hidden aspect-[16/9]">
        <img
          src={third}
          alt="Team walking together"
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    
  
  )
}

export default GlimpseGallery