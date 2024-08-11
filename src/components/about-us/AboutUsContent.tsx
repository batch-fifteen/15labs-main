import React from "react";
import Code from "../../assets/Rectangle 2719.png";
import ReactSVG from "../../assets/react.svg";
import AndroidSVG from "../../assets/android.svg";
import "./AboutUsContent.css";

const AboutUsContent: React.FC = () => {
  return (
    <section className="relative px-4 md:px-12">
      <div className="w-[150px] h-[140px] bg-[#EEEEEE7A] absolute bottom-0 right-0 -z-10 hidden md:block"></div>
      {/* <!-- Software Engineering Practices Section --> */}
      <div className="container mx-auto py-8">
        <div className="mt-8 mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Our Software Engineering Practices
          </h1>
          <div className="w-full md:w-[32rem] mx-auto">
            <p className="mb-6 text-base md:text-lg leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col mb-6 p-6 shadow-lg bg-[#FFFFFF] relative">
              <div className="decagon h-24 w-24 p-5 bg-blue-700 flex justify-center mb-2 absolute -top-10">
                <img src={ReactSVG} alt="React" className="w-12 h-12" />
              </div>
              <h2 className="text-lg md:text-xl font-semibold mb-4 mt-10 text-start">
                Web Development
              </h2>
              <p className="text-justify mb-6 text-sm md:text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
            <div className="flex flex-col mb-6 p-6 shadow-lg bg-[#FFFFFF] relative">
              <div className="decagon h-24 w-24 p-5 bg-blue-700 flex justify-center mb-2 absolute -top-10">
                <img
                  className="rotate-90 w-12 h-12"
                  src={AndroidSVG}
                  alt="Android"
                />
              </div>
              <h2 className="text-lg md:text-xl font-semibold mb-4 mt-10 text-start">
                Android Development
              </h2>
              <p className="text-justify text-sm md:text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={Code}
              alt="Code"
              className="hidden md:block w-full md:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsContent;
