
import SecondWidthWrapper from './SecondWidthWrapper'

const DigitalProducts = () => {
  return (
    <div className ="bg-default-color h-screen">
    <SecondWidthWrapper>

        <div className = "flex flex-col gap-20">
            {/* top section */}
            <div className = "flex flex-row gap-5">
                <span className = "text-8xl font-bold font-sora text-primary-color">01</span>
                <div className = "flex flex-col gap-2">
                <h2 className = "text-black">Digital <span className = "top-bottom-gradient text-transparent bg-clip-text">Products</span></h2>
                <p className = "text-text-secondary-color">We design digital experiences that connect business goals with user needs,<br className = "hidden lg:block leading-9"/> focusing on aesthetics, usability, and technical performance.</p>
                </div>


            </div>
           
            {/* /top section */}

        </div>
       

      

    </SecondWidthWrapper>
      </div>
  )
}

export default DigitalProducts