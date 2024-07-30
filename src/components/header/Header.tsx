import React, { RefObject } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import Logo15Labs from "../../assets/logo.svg";

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
  const navigateHeaderLogo: NavigateFunction = useNavigate();
  const headerHeight: number = 84;

  const handleScroll = (ref: RefObject<HTMLDivElement>) => {
    window.scrollTo({
      top: ref.current?.offsetTop! - headerHeight,
      behavior: "smooth",
    });
  };

  const nav: { name: string; anchorTo: RefObject<HTMLDivElement> }[] = [
    { name: "Home", anchorTo: homeRef },
    { name: "About Us", anchorTo: aboutUsRef },
    { name: "Works", anchorTo: worksRef },
    { name: "Contact", anchorTo: contactRef },
  ];
  return (
    <header className="bg-[#151D48] h-[85px] py-3 px-12 w-full sticky top-0 z-10">
      <div className="container justify-between h-full items-center flex">
        <img
          className="h-[30px] cursor-pointer"
          src={Logo15Labs}
          alt="15Labs Logo"
          onClick={() => navigateHeaderLogo("/")}
        />
        <div className="justify-between w-[400px] flex">
          {nav.map(({ name, anchorTo }, index) => {
            return (
              <a
                className="text-[17px] font-medium text-white hover:text-gray-200 cursor-pointer"
                key={index}
                onClick={() => handleScroll(anchorTo)}
              >
                {name}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
