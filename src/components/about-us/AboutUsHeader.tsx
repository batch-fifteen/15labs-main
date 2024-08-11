import React from "react";
import LaptopSVG from "../../assets/Vector.svg";
import RocketSVG from "../../assets/rocket.svg";
import ShieldSVG from "../../assets/Shield.svg";

const AboutUsHeader: React.FC = () => {
  return (
    <section className="w-full h-auto md:pl-12">
      <div className=" grid grid-cols-1 md:grid-cols-4 items-center">
        <div className="grid grid-cols-1  md:col-span-4 md:grid-cols-4">
          <div className="text-center md:text-left py-10">
            <h3 className="text-2xl md:text-xl font-semibold mb-4">About Us</h3>
            <p className="text-base md:text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <div className="bg-[#335EF7] flex flex-col items-center p-4 w-full h-full justify-center">
            <div className="bg-white bg-opacity-50 w-16 h-16 rounded-full flex justify-center items-center mb-2">
              <img className="w-12" src={LaptopSVG} alt="Laptop" />
            </div>
            <h5 className="text-white font-semibold text-sm md:text-base">
              Professional
            </h5>
          </div>
          <div className="bg-[#167EF8] flex flex-col items-center p-4 w-full h-full justify-center">
            <div className="bg-white bg-opacity-50 w-16 h-16 rounded-full flex justify-center items-center mb-2">
              <img className="w-12" src={RocketSVG} alt="Rocket" />
            </div>
            <h5 className="text-white font-semibold text-sm md:text-base">
              Professional
            </h5>
          </div>
          <div className="bg-[#33D4F7] flex flex-col items-center p-4 w-full h-full justify-center">
            <div className="bg-white bg-opacity-50 w-16 h-16 rounded-full flex justify-center items-center mb-2">
              <img className="w-12" src={ShieldSVG} alt="Shield" />
            </div>
            <h5 className="text-white font-semibold text-sm md:text-base">
              Professional
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHeader;
