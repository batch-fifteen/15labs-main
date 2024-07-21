import React from "react";
import LaptopSVG from "../../assets/Vector.svg";
import RocketSVG from "../../assets/rocket.svg";
import ShieldSVG from "../../assets/Shield.svg";
import Code from "../../assets/Rectangle 2719.png";
import ReactSVG from "../../assets/react.svg";
import AndroidSVG from "../../assets/android.svg";
import "./AboutUs.css";

const AboutUs: React.FC = () => {
  return (
    <>
      <section>
        {/* <!-- About Us and Professional Section --> */}
        <div className="bg-gray-200 w-full h-56">
          <div className="mx-auto flex flex-wrap md:flex-nowrap items-center gap-4 h-full">
            <div className="w-full md:w-1/3 px-8 text-justify py-6">
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
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
        </div>
      </section>

      <section>
        <div className="relative">
          <div className="w-[213px] h-[193px] bg-[#EEEEEE7A] absolute top-40 left-0 -z-10"></div>
          <div className="w-[213px] h-[193px] bg-[#EEEEEE7A] absolute bottom-0 right-0 -z-10"></div>
          {/* <!-- Software Engineering Practices Section --> */}
          <div className="container mx-auto py-8">
            <div className="mt-8 mb-10">
              <h1 className="text-2xl font-bold mb-4">
                Our Software Engineering Practices
              </h1>
              <p className="mb-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col gap-24">
                <div className="w-[90%] flex flex-col mb-6 p-7 shadow-lg bg-[#FFFFFF] rounded-lg relative">
                  <div className="decagon h-24 w-24 p-5 bg-blue-700 flex justify-center mb-2 absolute -top-10">
                    <img src={ReactSVG} alt="React" />
                  </div>
                  <h2 className="text-xl font-semibold mb-4 mt-10 text-start">
                    Web Development
                  </h2>
                  <p className="text-justify mb-6">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
                <div className="w-[90%] flex flex-col mb-6 p-7 shadow-lg bg-[#FFFFFF] rounded-lg relative">
                  <div className="decagon h-24 w-24 p-5 bg-blue-700 flex justify-center mb-2 absolute -top-10">
                    <img className="rotate-90" src={AndroidSVG} alt="Android" />
                  </div>
                  <h2 className="text-xl font-semibold mb-4 mt-10 text-start">
                    Android Development
                  </h2>
                  <p className="text-justify">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <img src={Code} alt="Code" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
