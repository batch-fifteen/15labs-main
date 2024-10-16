import React from "react";
import Slide1Image from "../../assets/image/home-assets/slide1.png";

const Slide1: React.FC = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 items-center text-white p-4 md:p-10 rounded-lg min-h-full">
      <div className="flex flex-col items-center md:items-start md:ml-16 text-center md:text-left">
        <h1 className="font-bold text-2xl md:text-4xl leading-relaxed mb-4">
          <span className="bg-[#00cfff] text-xl md:text-2xl text-white px-2 py-1">
            Providing
          </span>{" "}
          Fair <br className="md:hidden" /> and{" "}
          <span className="bg-[#00cfff] text-xl md:text-2xl text-white px-2 py-1">
            Efficient
          </span>{" "}
          <br className="md:hidden" /> Solutions for{" "}
          <br className="md:hidden" /> All
        </h1>
        <p className="text-base md:text-lg leading-relaxed mb-6 w-full md:w-3/4">
          We believe in delivering innovative and reliable solutions that
          empower businesses and individuals alike. Our goal is to simplify
          complexities, providing tailored strategies that drive growth and
          success in a rapidly evolving world.
        </p>
        <div className="space-x-4 text-lg md:text-2xl flex justify-center md:justify-start">
          <a href="#" className="text-white hover:text-gray-300">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </div>
      </div>
      <div className="hidden md:flex justify-center mt-4 md:mt-0">
        <img
          src={Slide1Image}
          alt="Team"
          className="w-full md:w-[80%] rounded-lg"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Slide1;
