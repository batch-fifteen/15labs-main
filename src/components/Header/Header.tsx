import React from "react";
import DummyImg from "../../assets/hd1080.png";

const Header: React.FC = () => {
  const nav: { name: string; link: string }[] = [
    { name: "Home", link: "#home" },
    { name: "About Us", link: "#about-us" },
    { name: "Works", link: "#works" },
    { name: "Contact", link: "#contact" },
  ];
  return (
    <header className="px-[111px] border-b-2 flex items-center justify-between p-4 bg-[#151D48] h-[85px]">
      <div className="flex-shrink-0">
        <img className="h-[55px]" src={DummyImg} alt="" />
      </div>

      <div className="justify-between w-[400px] flex space-x-4">
        {nav.map(({ name, link }, index) => {
          return (
            <a
              className="text-[17px] text-white hover:text-gray-200"
              key={index}
              href={link}
            >
              {name}
            </a>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
