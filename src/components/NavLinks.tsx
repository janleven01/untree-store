"use client";

import { navLinks, pageLinks, shopLinks } from "@/constants";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import Link from "next/link";
import { NavLinksProps } from "@/types";

const NavLinks = ({
  scrolled,
  otherClassname,
  sideBar,
  activeNav,
  setActiveNav,
}: NavLinksProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);
  const [activeShop, setActiveShop] = useState<boolean>(false);
  const [activePages, setActivePages] = useState<boolean>(false);

  // Sidebar
  const handleDropDownShop = () => {
    setActiveShop((prevState) => !prevState);
  };

  const handleDropDownPage = () => {
    setActivePages((prevState) => !prevState);
  };

  const handleMouseEnter = (index: number) => {
    if (sideBar === true) {
      setHoveredIndex(null);
    } else setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleActiveNav = (index: number) => {
    setActiveNav(index);
  };

  return (
    <div className={`navlinks_container ${otherClassname}`}>
      {navLinks.map((item, index) => (
        <div key={index} className="relative flex">
          <div
            className={`py-1 relative group transition-all duration-200 
              ${
                activeNav === index
                  ? `${scrolled ? "text-purple" : "text-black"}`
                  : `${sideBar ? "text-black" : "text-gray-500"}`
              } 
              ${scrolled ? "hover:text-purple" : "hover:text-black"}
              ${!sideBar && "font-medium"}
            `}
            onClick={() => handleActiveNav(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {/* NAVLINKS */}
            <Link
              href={item.href}
              className={`flex items-end uppercase ${
                sideBar
                  ? "text-sm justify-between hover:text-purple"
                  : "text-[11px]"
              }`}
            >
              {item.name}{" "}
              <span className="pl-1">
                {(index === 1 || index === 2) && !sideBar && (
                  <ChevronDown
                    width={14}
                    height={14}
                    onClick={() =>
                      index === 1 ? handleDropDownShop() : handleDropDownPage()
                    }
                  />
                )}
              </span>
            </Link>
            {/* Active index underline */}
            {activeNav === index && !sideBar && (
              <div
                className={`absolute mt-2 h-[3px] w-11/12 bg-black ${
                  index === 1 || index === 2 ? "w-8/12" : "w-11/12"
                }`}
              />
            )}
            {/* Large screens dropdown */}
            <div className="navlinks_lg-dropdown group-hover:translate-y-0">
              {(hoveredIndex === 1 || hoveredIndex === 2) &&
                index === hoveredIndex && (
                  <DropdownMenu
                    items={hoveredIndex === 1 ? shopLinks : pageLinks}
                    scrolled={scrolled}
                  />
                )}
            </div>

            {/* Mobile Screens Sidebar Menu */}
            {index === 1 && sideBar && (
              <div
                className={`h-40 navlinks_mobile-menu ${
                  activeShop ? "max-h-40" : "max-h-0"
                }`}
              >
                <DropdownMenu items={shopLinks} sideBar={sideBar} />
              </div>
            )}
            {index === 2 && sideBar && (
              <div
                className={`h-32 navlinks_mobile-menu  ${
                  activePages ? "max-h-32" : "max-h-0"
                }`}
              >
                <DropdownMenu items={pageLinks} sideBar={sideBar} />
              </div>
            )}
          </div>

          {/* ChevronDown Sidebar */}
          <div className="navlinks_mobile-chevron">
            {index === 1 && sideBar && (
              <ChevronDown
                width={14}
                height={14}
                onClick={() => handleDropDownShop()}
                className={`navlinks_rotate ${
                  activeShop ? "rotate-180" : "rotate-0"
                }`}
              />
            )}
            {index === 2 && sideBar && (
              <ChevronDown
                width={14}
                height={14}
                onClick={() => handleDropDownPage()}
                className={`navlinks_rotate ${
                  activePages ? "rotate-180" : "rotate-0"
                }`}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavLinks;
