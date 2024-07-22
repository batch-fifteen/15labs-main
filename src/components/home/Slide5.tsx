import React from "react";

const Slide5: React.FC = () => {
  return (
    <div className="relative">
      <div className="fixed border-0 ml-[960px] m-[90px] bg-[#00cfff] w-[150px] h-[100px] z-10" />
      <div className="flex flex-col h-full items-center justify-center text-white p-[100px]">
        <div className="bg-[url('/src/assets/image/home-assets/slide5.png')] bg-cover bg-center bg-no-repeat h-[100%] py-16 rounded-lg z-10">
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="font-bold text-[55px] leading-relaxed mb-4 text-center w-[90%]">
              Integrate the latest technologies to deliver competitive solutions
              in the market
            </h2>
          </div>
        </div>
      </div>
      <div className="fixed border-0 ml-[90px] bottom-[90px] bg-[#00cfff] w-[150px] h-[100px] z-0" />
    </div>
  );
};

export default Slide5;
