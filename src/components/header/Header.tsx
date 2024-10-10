import React, { RefObject, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import Logo15Labs from "../../assets/logo.svg";
import { useScrollPosition } from "../hooks/useScrollPosition";

interface HeaderProps {
  homeRef: RefObject<HTMLDivElement>;
  aboutUsRef: RefObject<HTMLDivElement>;
  worksRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
}

const Header: React.FC<HeaderProps> = ({
  homeRef,
  aboutUsRef,
  worksRef,
  contactRef,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigateHeaderLogo: NavigateFunction = useNavigate();
  const headerHeight: number = 84;

  const handleScroll = (ref: RefObject<HTMLDivElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
  };

  const nav = [
    { name: "Home", anchorTo: homeRef },
    { name: "About Us", anchorTo: aboutUsRef },
    { name: "Works", anchorTo: worksRef },
    { name: "Contact", anchorTo: contactRef },
  ];

  const scrollPosition = useScrollPosition();

  return (
    <>
      <header
        className={`transition-all ease-in-out duration-700 ${
          scrollPosition > 600
            ? "bg-[#151D48] h-[85px] py-3 px-12 w-full sticky top-0 z-10"
            : "bg-[#151D48] h-[70px] py-3 px-12 w-full top-0 z-10"
        }`}
      >
        <div className="container justify-between h-full items-center flex">
          <img
            className="h-[30px] cursor-pointer"
            src={Logo15Labs}
            alt="15Labs Logo"
            onClick={() => navigateHeaderLogo("/")}
          />

          <nav className="hidden md:flex space-x-8">
            {nav.map(({ name, anchorTo }, index) => (
              <a
                className="text-[17px] font-medium text-white hover:text-gray-200 cursor-pointer"
                key={index}
                onClick={() => handleScroll(anchorTo)}
              >
                {name}
              </a>
            ))}
          </nav>

          <div className="md:hidden z-20">
            <button
              className="text-white focus:outline-none"
              aria-label="Open Menu"
              role="button"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`md:hidden transform transition-transform duration-500 ease-in-out fixed top-16 left-0 h-screen w-full bg-[#151D48] z-30 ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <nav className="flex flex-col items-center space-y-4 h-full justify-center">
            {nav.map(({ name, anchorTo }, index) => (
              <a
                className="text-[17px] font-medium text-white hover:text-gray-200 cursor-pointer"
                key={index}
                onClick={() => {
                  handleScroll(anchorTo);
                  setMobileMenuOpen(false);
                }}
              >
                {name}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
