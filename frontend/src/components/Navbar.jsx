// src/components/Navbar/Navbar.jsx
import { useRef, useState } from "react";
import companyLogo from "../assets/company-logo.png";
import { Link } from "react-router";
import { IoArrowForward } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import MegaMenu from "./MegaMenu";
import { megaMenuData } from "../constants/megaMenuData";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const closeTimer = useRef(null);

  const navItems = [
    { title: "What we do",  link: "", dropdown: true },
    { title: "Who we are ", link: "", dropdown: true },
    { title: "Our work",    link: "", dropdown: false },
    { title: "Resources",   link: "", dropdown: false },
  ];

  const handleMouseEnter = (title) => {
    clearTimeout(closeTimer.current);
    setOpenMenu(title);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  };

  return (
   
    <nav
      className="flex flex-row justify-between items-center px-6 lg:px-12 xl:px-16 pt-3 "
      style={{ position: "relative" }}
    >

      {/* Left side */}
      <div className="flex flex-row gap-8 items-center justify-center">

        {/* Logo */}
        <div className="w-16 h-16 overflow-hidden">
          <img
            src={companyLogo}
            alt="squarelabs-logo"
            className="w-full h-full object-fit object-center"
          />
        </div>

        {/* Nav items */}
        <div className="hidden lg:flex flex-row gap-10">
          {navItems.map((item) => (
            <div
              key={item.title}
              style={{ position: "relative" }}
              onMouseEnter={() => item.dropdown && handleMouseEnter(item.title)}
              onMouseLeave={() => item.dropdown && handleMouseLeave()}
            >
              {/* Trigger row */}
              <div className="group flex flex-row gap-3 items-center cursor-pointer">
                <span className="text-text-quarternary-color font-outfit lg:text-lg group-hover:text-primary-color transition-all duration-200 ease-in-out">
                  {item.title}
                </span>
                {item.dropdown && (
                  <MdKeyboardArrowDown
                    className={`
                      w-8 h-8 transition-all duration-300 ease-in-out
                      ${openMenu === item.title
                        ? "rotate-180 text-primary-color"
                        : "text-text-quarternary-color group-hover:text-primary-color"
                      }
                    `}
                  />
                )}
              </div>

              {/* Mega menu — anchored to this nav item div */}
              {item.dropdown && megaMenuData[item.title] && (
                <MegaMenu
                  visible={openMenu === item.title}
                  categories={megaMenuData[item.title]}
                />
              )}
            </div>
          ))}
        </div>

      </div>

      {/* Right side CTA */}
      <Link
        to="/start-a-project"
        className="max-lg:hidden flex flex-row gap-2 items-center justify-center rounded-4xl bg-linear-to-r from-primary-color to-secondary-color lg:px-6 lg:py-4 px-4 py-3 self-center transition-all duration-300 ease-in"
      >
        <span className="text-default-color text-sm lg:text-base font-outfit">
          Start a Project
        </span>
        <IoArrowForward className="text-default-color text-3xl font-light" />
      </Link>

    </nav>
  );
};

export default Navbar;