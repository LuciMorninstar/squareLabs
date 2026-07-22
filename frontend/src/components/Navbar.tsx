"use client";

import { assetSrc } from "@/lib/assets";
import companyLogo from "@/assets/company-logo.png";
import { megaMenuData } from "@/constants/megaMenuData";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { IoArrowForward } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import MegaMenu from "./MegaMenu";

const navItems = [
  { title: "What we do", link: "/what-we-do", dropdown: true },
  { title: "Who we are ", link: "/who-we-are", dropdown: true },
  { title: "Our work", link: "/our-work", dropdown: false },
  { title: "Resources", link: "/resources", dropdown: false },
] as const;

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleMouseEnter = (title: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(title);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  };

  const keepMenuOpen = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  useEffect(() => {
    document.body.style.overflow = mobileNavOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileNavOpen]);

  const activeMegaMenu =
    openMenu && openMenu in megaMenuData
      ? megaMenuData[openMenu as keyof typeof megaMenuData]
      : null;

  return (
    <nav className="relative flex flex-row justify-between items-center px-6 lg:px-12 xl:px-16 xl:pt-3">
      <div className="flex flex-row gap-8 items-center justify-center">
        <Link href="/" className="w-16 h-16 overflow-hidden">
          <img
            src={assetSrc(companyLogo)}
            alt="squarelabs-logo"
            className="w-full h-full object-fit object-center"
          />
        </Link>

        <div className="hidden lg:flex flex-row gap-10">
          {navItems.map((item) => (
            <div
              key={item.title}
              className="relative"
              onMouseEnter={() => item.dropdown && handleMouseEnter(item.title)}
              onMouseLeave={() => item.dropdown && handleMouseLeave()}
            >
              {item.dropdown ? (
                <div className="group flex flex-row gap-3 items-center cursor-pointer">
                  <Link
                    href={item.link}
                    className="text-text-quarternary-color font-outfit lg:text-lg hover:text-primary-color transition-all duration-200 ease-in-out"
                  >
                    {item.title}
                  </Link>
                  <MdKeyboardArrowDown
                    className={`
                      w-8 h-8 transition-all duration-300 ease-in-out
                      ${
                        openMenu === item.title
                          ? "rotate-180 text-primary-color"
                          : "text-text-quarternary-color group-hover:text-primary-color"
                      }
                    `}
                  />
                </div>
              ) : (
                <Link
                  href={item.link}
                  className="group flex flex-row gap-3 items-center cursor-pointer"
                >
                  <span className="text-text-quarternary-color font-outfit lg:text-lg group-hover:text-primary-color transition-all duration-200 ease-in-out">
                    {item.title}
                  </span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      {activeMegaMenu && (
        <MegaMenu
          visible={Boolean(openMenu)}
          categories={activeMegaMenu}
          onClose={() => setOpenMenu(null)}
          onMouseEnter={keepMenuOpen}
          onMouseLeave={handleMouseLeave}
        />
      )}

      <Link
        href="/start-a-project"
        className="max-lg:hidden flex flex-row gap-2 items-center justify-center rounded-4xl bg-linear-to-r from-primary-color to-secondary-color lg:px-6 lg:py-4 px-4 py-3 self-center transition-all duration-300 ease-in"
      >
        <span className="text-default-color text-sm lg:text-base font-outfit">
          Start a Project
        </span>
        <IoArrowForward className="text-default-color text-3xl font-light" />
      </Link>

      <div
        onClick={() => setMobileNavOpen(true)}
        className="lg:hidden p-1 rounded-xl cursor-pointer"
      >
        <FiMenu className="text-3xl" />
      </div>

      <div
        onClick={() => setMobileNavOpen(false)}
        className={`fixed inset-0 z-10 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ease-in-out ${
          mobileNavOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        className={`fixed top-0 right-0 z-20 h-screen w-[70%] max-w-sm bg-linear-to-b from-primary-color to-secondary-color shadow-2xl flex flex-col gap-2 px-8 pt-8 transform transition-transform duration-500 ease-in-out ${
          mobileNavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          onClick={() => setMobileNavOpen(false)}
          className="self-end p-2 rounded-full border border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300 ease-in-out cursor-pointer"
        >
          <AiOutlineClose className="text-2xl text-white" />
        </div>

        <div className="flex flex-col gap-2 mt-10">
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              onClick={() => setMobileNavOpen(false)}
              className="group flex flex-row items-center justify-between py-4 border-b border-white/15"
            >
              <span className="text-white font-outfit text-xl tracking-wide group-hover:translate-x-2 group-hover:text-white/90 transition-all duration-300 ease-in-out">
                {item.title}
              </span>
              <IoArrowForward className="text-white text-xl opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out" />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
