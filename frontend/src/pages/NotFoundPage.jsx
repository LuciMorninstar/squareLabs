
import Grid2 from "../assets/Grid2.png"
import errorCode from "../assets/404.png"

import { Link } from 'react-router'
import { IoArrowForward } from "react-icons/io5";




const NotFoundPage = () => {
  return (
    <section className = "relative w-full max-md:h-[100dvh] md:h-screen overflow-hidden ">
        <img src={Grid2} className = "w-full h-full object-fit object-center" alt="404-Image"/>
        <img src={errorCode} className = 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max h-max object-cover object-center xl:scale-110 '/>
      
      {/* bottom blur */}
      <div className = "h-screen w-full absolute top-1/2 mt-10   blur-[300px] bg-text-secondary-color  rounded-[50%] ">
adsf
      </div>
        <div></div>
        

        {/* content */}
        <div className = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-8 text-center">
            <h3>Page Not Found</h3>
            <span className = "text-xl  text-center text-text-tertiary-color">We can't find the page you are looking for. <br/> Probably the link is broken.</span>

            <Link  to = "/start-a-project" className = "flex flex-row gap-4 items-center justify-center rounded-4xl bg-linear-to-r from-primary-color to-secondary-color lg:px-6 lg:py-4 px-4 py-3 self-center transition-all duration-300 ease-in">
                               
            <span className = "text-default-color text-base lg:text-xl font-outfit font-light ">Take me home</span>
            <IoArrowForward className = "text-default-color text-3xl font-light" />
            </Link>

        </div>



    </section>
  )
}

export default NotFoundPage