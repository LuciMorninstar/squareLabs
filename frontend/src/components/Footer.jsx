
import WidthWrapper from "./WidthWrapper";
import squarelabslogo from "../assets/squarelabslogo.png"
import { Link } from 'react-router';
import insta from "../assets/footer/insta.svg?react";
import facebook from "../assets/footer/facebook.svg?react";
import twitter from "../assets/footer/twitter.svg?react";
import linkedIn from "../assets/footer/linkedIn.svg?react";


const Footer = () => {

  const footerLinks = [
    {
      title:"Company",
      links:[
        {name:"About Us", url:"/about-us"},
        {name:"Career", url:"/career"},
        {name:"Meet the Team ", url:"/meet-the-team"},
        {name:"Partners ", url:"/partners"},
      ]
    },
    {
      title:"Services",
      links:[
        {name:"Digital Products", url:"/digital-products"},
        {name:"Growth & Branding", url:"/growth-and-branding"},
        {name:"Strategies ", url:"/strategies"},
        {name:"Technology", url:"/technology"},
      ]
    },
    {
      title:"Resources",
      links:[
        {name:"Blogs & Insights", url:"/blogs-and-insights"},
        {name:"Case Studies", url:"/case-studies"},
        {name:"Tutorials ", url:"/tutorials"},
        {name:"Academy", url:"/academy"},
      ]
    },
    {
      title:"General",
      links:[
        {name:"Home", url:"/"},
        {name:"What We Do", url:"/what-we-do"},
        {name:"Who We Are ", url:"/who-we-are"},
        {name:"Our Works", url:"/our-works"},
      ]
    },

  ]

  const socialLinks = [
    {name:"facebook", icon:facebook ,href:"/facebook"},
    {name:"insta", icon:insta, href:"/facebook"},
    {name:"x", icon:twitter, href:"/x"},
    {name:"linkedIn", icon:linkedIn, href:"/linkedIn"},
  ]
  return (
    <WidthWrapper>
      <div className = "py-16 px-6 lg:px-16 w-full bg-footer-background-color  xl:rounded-4xl flex flex-col gap-8 lg:gap-24">
        {/* top part */}
        <div className ="flex flex-col-reverse xl:flex-row gap-4 lg:flex-row lg:justify-between items-center lg:items-center  ">
          <p className = "text-text-secondary-color text-sm  lg:text-lg leading-8">Empowering businesses through innovative technology solutions. SquareLabs <br className= "hidden lg:block"/>  delivers cutting-edge software development, digital marketing, and cloud <br className ="hidden lg:block"/> solutions that drive business growth and digital transformation</p>

             {/* logo */}
        <div className = " size-20 lg:size-48 overflow-hidden">
          <img src={squarelabslogo} alt="squarelabs-logo" className ="w-full h-full object-cover object-center"/>
        </div>
        {/* /logo */}
        </div>
     
        {/* /top part */}

        {/* mid part */}
        <div className = "  w-full flex flex-col gap-7  max-lg:gap-6 xl:flex-row  ">
          {/* left side on big screen / top section in smaller screen */}
          <div className = "w-full xl:w-3/5 grid grid-cols-2 sm:grid-cols-4 gap-x-16 gap-y-6 sm:gap-5 lg:grid-cols-4 xl:grid-cols-4">
          {
            footerLinks.map((link)=>(
              <div key={link.title} className = "flex flex-col gap-2 xl:gap-10">
                <span className = " text-2xl xl:text-3xl text-default-color font-sora">{link.title}</span>
                <ul>
                  {
                    link.links.map((l)=>( 
                      <li className = "text-base lg:text-xl xl:text-xl text-text-secondary-color font-outfit hover:text-text-primary-color  transition-all duration-200 ease-in-out  leading-10" key={l.url}>
                       <Link to ={l.url}>{l.name}</Link>
                        </li>
                    ))

                  }
          
                </ul>

              </div>
            ))
          }
          </div>

          {/* /left side */}

          {/* right side on big screen / bottom section in smaller screen  */}
          <div className =" w-full xl:w-2/5 flex flex-col max-xl:items-center
          xl:items-end gap-3 xl:gap-5  ">

           <span className = " text-2xl xl:text-3xl text-default-color font-sora">Follow Our Social</span>

            {/* social icons */}
           <div className = "flex flex-row gap-6 xl:gap-12">
            {
              socialLinks.map(({name, icon:Icon, href})=>(
                <Link key={name} to ={href} key={name}>
                  <Icon className =" size-6 xl:size-8 text-white "/>
                </Link>
              
              ))
            }

           </div>

          </div>
          

          {/* /right side */}

        </div>


        {/* /mid part */}

        {/* bottom part */} 
        <div className = "flex flex-col gap-6 items-center justify-center lg:flex-row lg:justify-between">
          {/* left side */}
          <p className = "text-text-secondary-color text-base lg:text-lg"> &copy; {new Date().getFullYear()} SquareLabs. All rights reserved.</p>
            {/* right side */}
          <div className = "flex flex-row gap-12">
            
            <Link className = "text-text-secondary-color text-base lg:text-lg hover:text-text-primary-color transition-all duration-200 ease-in-out" to = "/privacy-policy">
            Privacy Policies
            </Link>
            <Link className = "text-text-secondary-color text-base lg:text-lg hover:text-text-primary-color transition-all duration-200 ease-in-out" to = "/terms-and-condition">
            Terms & Condition
            </Link>

          </div>

        </div>


        {/* /bottom part */}


      </div>

    </WidthWrapper>
  )
}

export default Footer