"use client";

import { Menu, X } from "lucide-react";
import NavLinks from "./NavLinks";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useOutsideClick } from "@/lib/auto_close";
import { usePathname } from "next/navigation";
import NavIcons from "./NavIcons";
import SearchBar from "./SearchBar";

const NavBar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const menuRef = useRef<null | HTMLDivElement>(null);
  const [activeNav, setActiveNav] = useState<null | number>(null);
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const pathname = usePathname();
  const parts = pathname.split("/");
  const newPathname = "/" + parts[1];

  const handleMenuClick = () => {
    setMenuActive((prevState) => !prevState);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setScrolled(true);
      localStorage.setItem("scrolled", "true");
    } else {
      setScrolled(false);
      localStorage.setItem("scrolled", "false");
    }
  };

  const handleSearch = () => {
    setIsSearch((prevStat) => !prevStat);
    setMenuActive(false);
  };

  useEffect(() => {
    const scrollState = localStorage.getItem("scrolled") === "true";
    setScrolled(scrollState);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const pathToIndex: Record<string, number> = {
      "/": 0,
      "/shop": 1,
      "/page": 2,
      "/cart": 2,
      "/contact": 2,
      "/checkout": 2,
      "/men": 3,
      "/women": 4,
    };

    setActiveNav(pathToIndex[newPathname] || 0);
  }, [newPathname]);

  useOutsideClick(menuRef, false, setMenuActive);

  return (
    <header
      className={`navbar_header ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
        }
      `}
    >
      <nav className="max-container flex-between">
        {/* Logo */}
        <div className="uppercase text-xs font-semibold">
          <Link href="/" onClick={() => setActiveNav(0)}>
            UntreeStore<span className="text-red-700">.</span>
          </Link>
        </div>
        {/* NavLinks */}
        <div className="max-lg:hidden">
          <NavLinks
            scrolled={scrolled}
            activeNav={activeNav}
            setActiveNav={setActiveNav}
          />
        </div>
        {/* Icons */}
        <div className="max-lg:hidden flex xl:gap-7 gap-5">
          <NavIcons handleSearch={handleSearch} />
        </div>
        {/* Mobile Screen Menu */}
        <div className="lg:hidden">
          <button
            type="button"
            className="cursor-pointer"
            onClick={handleMenuClick}
          >
            <Menu
              width={24}
              height={24}
              className="navbar_menu-styles"
            />
          </button>
          <div
            ref={menuRef}
            className={`navbar_menu-container ${
              menuActive ? "translate-x-0 xs:w-[40vw] w-[60vw]" : "translate-x-full w-0"
            }`}
          >
            {menuActive && (
              <div className="py-1.5 sm:py-4 px-5 md:px-16">
                <div className="flex justify-end">
                  <X
                    onClick={handleMenuClick}
                    size={36}
                    strokeWidth={1.5}
                    className="hover:text-purple"
                  />
                </div>
                <NavLinks
                  otherClassname="flex-col pt-2 sm:pt-4 gap-2"
                  sideBar={true}
                  activeNav={activeNav}
                  setActiveNav={setActiveNav}
                />
                <div className="flex gap-5 pt-7">
                  <NavIcons handleSearch={handleSearch} />
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* OPEN SEARCHBAR */}
      <SearchBar isSearch = {isSearch} handleSearch = {handleSearch} setIsSearch = {setIsSearch}/>

      {/* MENU MOBILE BACKGROUND */}
      <div
        className={`navbar_menu-background ${
          menuActive
            ? "navbar_menu-active"
            : "navbar_menu-inactive"
        }`}
      />
    </header>
  );
};

export default NavBar;
