import React from "react";
import { useState } from "react";
import logo from '../assets/logo.png'
import { NAVIGATION_LINKS } from "../constants/index";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targeElement = document.querySelector(href);
    if (targeElement) {
      const offset = -85;
      const elementPosition = targeElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };
  return (
    <div>
      <nav className="fixed left-0 right-0 top-4 z-50">
        <div className="mx-auto hidden max-w-2xl items-center justify-around rounded-lg bg-black/20 py-3 backdrop-blur-lg lg:flex">
          <div className="flex justify-between gap-6">
            <a href="#">
              <img src={logo} width={90} alt="logo" />
            </a>
          </div>
          <div>
            <ul className="flex items-center gap-4">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="text-sm hover:text-yellow-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="rounded-lg backdrop-blur-md lg:hidden">
            <div className="flex items-center justify-between">
                <div>
                    <a href="#">
                        <img src={logo} width={90} className="m-2" alt=""/>
                    </a>
                </div>
                <div className="flex items-center">
                  <button className="focus:outline-none lg:hidden" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <FaTimes className="m-2 h-6 w-5"/> : <FaBars className="m-2 h-6 w-5"/>}
                  </button>
                </div>
            </div>
            {isMobileMenuOpen && (
              <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <a href={item.href} onClick={(e) => handleLinkClick(e, item.href)} className="block w-full text-xl font-normal">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
