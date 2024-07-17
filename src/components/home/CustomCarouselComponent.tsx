// src/components/CustomCarouselComponent.tsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CustomCarouselComponents.css";
import Slide1 from "../../assets/image/home-assets/slide1.png";

export const CustomCarouselComponent: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider className="mx-10" {...settings}>
      <div>
        <div className="grid grid-cols-2 items-center text-white p-8 rounded-lg min-h-screen">
          <div className="ml-10">
            <h1 className="font-bold text-[40px] leading-relaxed mb-4">
              <span className="bg-[#00cfff] text-4xl text-white px-2 py-1">
                Providing
              </span>{" "}
              Fair <br /> and{" "}
              <span className="bg-[#00cfff] text-white px-2 py-1">
                Efficient
              </span>{" "}
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
            <img src={Slide1} alt="Team" className="w-[80%] rounded-lg" />
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="fixed border-0 m-[90px] bg-[#00cfff] w-[150px] h-[100px] z-10" />
        <div className="flex flex-col h-screen items-center justify-center text-white p-[100px]">
          <div className="bg-[url('/src/assets/image/home-assets/slide2.png')] bg-cover bg-center bg-no-repeat h-[100%] rounded-lg z-10">
            <div className="flex flex-col items-center justify-center h-full">
              <h2 className="font-bold text-[55px] leading-relaxed mb-4 text-center w-[80%]">
                Adopt{" "}
                <span className="bg-[#00cfff] text-[55px] text-white px-2 py-1">
                  best development practices
                </span>{" "}
                to produce secure and{" "}
                <span className="bg-[#00cfff] text-[55px] text-white px-2 py-1">
                  reliable software
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="fixed border-0 ml-[960px] bottom-[90px] bg-[#00cfff] w-[150px] h-[100px] z-0" />
      </div>
      <div className="relative">
        <div className="fixed border-0 ml-[960px] m-[90px] bg-[#00cfff] w-[150px] h-[100px] z-10" />
        <div className="flex flex-col h-screen items-center justify-center text-white p-[100px]">
          <div className="bg-[url('/src/assets/image/home-assets/slide3.png')] bg-cover bg-center bg-no-repeat h-[100%] rounded-lg z-10">
            <div className="flex flex-col items-center justify-center h-full">
              <h2 className="font-bold text-[55px] leading-relaxed mb-4 text-center w-[80%]">
                Build long-term{" "}
                <span className="bg-[#00cfff] text-[55px] text-white px-2 py-1">
                  relationships
                </span>{" "}
                with{" "}
                <span className="bg-[#00cfff] text-[55px] text-white px-2 py-1">
                  clients based on trust
                </span>
                and
                <span className="bg-[#00cfff] text-[55px] text-white px-2 py-1">
                  integrity
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="fixed border-0 ml-[90px] bottom-[90px] bg-[#00cfff] w-[150px] h-[100px] z-0" />
      </div>
      <div className="relative">
        <div className="fixed border-0 m-[90px] bg-[#00cfff] w-[150px] h-[100px] z-10" />
        <div className="flex flex-col h-screen items-center justify-center text-white p-[100px]">
          <div className="bg-[url('/src/assets/image/home-assets/slide4.png')] bg-cover bg-center bg-no-repeat h-[100%] rounded-lg z-10">
            <div className="flex flex-col items-center justify-center h-full">
              <h2 className="font-bold text-[55px] leading-relaxed mb-4 text-center w-[80%]">
                Develop{" "}
                <span className="bg-[#00cfff] text-[55px] text-white px-2 py-1">
                  innovative software
                </span>{" "}
                that enhances business{" "}
                <span className="bg-[#00cfff] text-[55px] text-white px-2 py-1">
                  productivity and efficiency
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="fixed border-0 ml-[960px] bottom-[90px] bg-[#00cfff] w-[150px] h-[100px] z-0" />
      </div>
      <div className="relative">
        <div className="fixed border-0 ml-[960px] m-[90px] bg-[#00cfff] w-[150px] h-[100px] z-10" />
        <div className="flex flex-col h-screen items-center justify-center text-white p-[100px]">
          <div className="bg-[url('/src/assets/image/home-assets/slide5.png')] bg-cover bg-center bg-no-repeat h-[100%] rounded-lg z-10">
            <div className="flex flex-col items-center justify-center h-full">
              <h2 className="font-bold text-[55px] leading-relaxed mb-4 text-center w-[90%]">
                Integrate the latest technologies to deliver competitive
                solutions in the market
              </h2>
            </div>
          </div>
        </div>
        <div className="fixed border-0 ml-[90px] bottom-[90px] bg-[#00cfff] w-[150px] h-[100px] z-0" />
      </div>
    </Slider>
  );
};
