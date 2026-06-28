import WidthWrapper from './WidthWrapper'

const WhatWeDoHero2 = () => {
    const whatWeDoItems = [
        {id:1,title:"Digital Products"},
        {id:2,title:"Growth Solutions"},
        {id:3,title:"Technology"},
    ]
  return (

    <section className = "w-full px-0 pt-0 md:pt-5 lg:px-6 lg:py-3 mx-auto">
   
        <div className ="sticky top-5 lg:flex bg-tertiary-color px-2 lg:px-12 py-6 lg:rounded-3xl  flex-row gap-2 lg:gap-8">
            {whatWeDoItems.map((item)=>(    
                <span  key={item?.id} className = "flex flex-row gap-3 items-center text-base lg:text-lg ">
                    <p className = "top-bottom-gradient text-transparent bg-clip-text font-semibold">0{item?.id}</p>
                    <p className = "text-default-color">{item?.title}</p>
                </span>
            ))}

        </div>

        </section>

  
    
  )
}

export default WhatWeDoHero2