import React from "react";
import LaptopSVG from "../../assets/Vector.svg";
import RocketSVG from "../../assets/rocket.svg";
import ShieldSVG from "../../assets/Shield.svg";

const AboutUsHeader: React.FC = () => {
  return (
    <section className="bg-half-half w-full h-56 px-12">
      <div className="container mx-auto flex flex-wrap md:flex-nowrap items-center gap-4 h-full">
        <div className="w-full md:w-1/3 pe-8 text-justify py-6">
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>

        <div className="flex w-full md:w-2/3 h-full">
          <div className="bg-[#335EF7] flex flex-col items-center p-4 h-full w-full justify-center">
            <div className="bg-white bg-opacity-50 w-20 h-20 rounded-full flex justify-center items-center mb-2">
              <img className="w-14" src={LaptopSVG} alt="Laptop" />
            </div>
            <h5 className="text-white font-semibold">Professional</h5>
          </div>
          <div className="bg-[#167EF8] flex flex-col items-center p-4 h-full w-full justify-center">
            <div className="bg-white bg-opacity-50 w-20 h-20 rounded-full flex justify-center items-center mb-2">
              <img className="w-12" src={RocketSVG} alt="Rocket" />
            </div>
            <h5 className="text-white font-semibold">Professional</h5>
          </div>
          <div className="bg-[#33D4F7] flex flex-col items-center p-4 h-full w-full justify-center">
            <div className="bg-white bg-opacity-50 w-20 h-20 rounded-full flex justify-center items-center mb-2">
              <img className="w-14" src={ShieldSVG} alt="Shield" />
            </div>
            <h5 className="text-white font-semibold">Professional</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHeader;
