import React from 'react'
import companyLogo from "../assets/company-logo.png"
import DropdownSvg from "../assets/svg/dropdown.svg?react";
import { Link } from 'react-router'
import { IoArrowForward } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";




const Navbar = () => {

  const navItems = [
    {
      title:"What we do",
      link:"",
      dropdown:true
    },
    {
      title:"Who we are ",
      link:"",
      dropdown:true
    },
    {
      title:"Our work",
      link:"",
      dropdown:false
    },
    {
      title:"Resources",
      link:"",
      dropdown:false
    },
  
  ]


  return (
    <nav className = "flex flex-row justify-between items-center px-6 lg:px-12 xl:px-16 pt-3 ">

      {/* left side */}

      <div className = "flex flex-row gap-8 items-center justify-center ">
      {/* for logo */}
      <div className = "w-16 h-16 overflow-hidden">
        <img src={companyLogo} alt="squarelabs-logo" className= "w-full h-full object-fit object-center"/>
      </div>
      {/* /for logo */}

      <div className = "hidden lg:flex flex-row gap-10 ">
        {
          navItems.map((item)=>(
            <div key = {item?.title} className =" group flex flex-row  gap-3 items-center cursor-pointer ">
              <span className ="text-text-quarternary-color font-outfit lg:text-lg group-hover:text-primary-color transition-all duration-200 ease-in-out">{item?.title}</span>
              <span className = "group-hover:text-primary-color">{(item?.dropdown) && <MdKeyboardArrowDown  className = "w-8 h-8 text-text-quarternary-color group-hover:text-primary-color transition-all duration-200 ease-in-out "/> }</span>

            </div>
          ))

        }
      </div>

      </div>
      {/* /left side */}

      {/* right side */}
        <Link  to = "/start-a-project" className = "flex flex-row gap-2 items-center justify-center rounded-4xl bg-linear-to-r from-primary-color to-secondary-color lg:px-6 lg:py-4 px-4 py-3 self-center transition-all duration-300 ease-in">
                               
            <span className = "text-default-color text-sm lg:text-base font-outfit   ">Start a Project</span>
            <IoArrowForward className = "text-default-color text-3xl font-light" />
            </Link>
      


      {/* /right side */}
      
    </nav>
  )
}

export default Navbar