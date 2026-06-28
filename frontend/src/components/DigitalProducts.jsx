
import SecondWidthWrapper from './SecondWidthWrapper'

const DigitalProducts = () => {
  return (
    <div className ="bg-default-color h-screen">
    <SecondWidthWrapper>

        <div className = "flex flex-col gap-20">
            {/* top section */}
            <div className = "flex flex-row gap-8">
                <span>01</span>
                <div className = 'flex flex-col gap-4'>
                    <h3>Digital <span className= "top-bottom-gradient text-transparent bg-clip-text">Products</span></h3>

                </div>

            </div>
            {/* /top section */}

        </div>
       

      

    </SecondWidthWrapper>
      </div>
  )
}

export default DigitalProducts