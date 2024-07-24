import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import Logo15Labs from "../../assets/logo.svg";

const Header: React.FC = () => {
  const navigateHeaderLogo: NavigateFunction = useNavigate();

  const nav: { name: string; link: string }[] = [
    { name: "Home", link: "#home" },
    { name: "About Us", link: "#about-us" },
    { name: "Works", link: "#works" },
    { name: "Contact", link: "#contact" },
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
          {nav.map(({ name, link }, index) => {
            return (
              <a
                className="text-[17px] font-medium text-white hover:text-gray-200"
                key={index}
                href={link}
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
