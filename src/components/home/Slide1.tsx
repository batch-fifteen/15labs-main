import React from "react";
import Slide1Image from "../../assets/image/home-assets/slide1.png";

const Slide1: React.FC = () => {
  return (
    <div className="grid grid-cols-2 items-center text-white p-8 rounded-lg min-h-full">
      <div className="ml-10">
        <h1 className="font-bold text-[40px] leading-relaxed mb-4">
          <span className="bg-[#00cfff] text-4xl text-white px-2 py-1">
            Providing
          </span>{" "}
          Fair <br /> and{" "}
          <span className="bg-[#00cfff] text-white px-2 py-1">Efficient</span>{" "}
          <br /> Solutions for <br /> All
        </h1>
        <p className="text-base leading-relaxed mb-6 w-3/4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
        </p>
        <div className="space-x-4 text-2xl">
          <a href="#" className="text-white">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="text-white">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-white">
            <i className="fab fa-github"></i>
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </div>
      </div>
      <div className="max-w-1/2 ml-[20px]">
        <img src={Slide1Image} alt="Team" className="w-[80%] rounded-lg" />
      </div>
    </div>
  );
};

export default Slide1;
