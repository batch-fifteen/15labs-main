import React from "react";

const Slide2: React.FC = () => {
  return (
    <div className="relative">
      {/* <div className="fixed border-0 m-[30px] bg-[#00cfff] w-[150px] h-[100px] z-10" /> */}
      <div className="flex flex-col h-full items-center justify-center text-white p-12">
        <div className="bg-[url('/src/assets/image/home-assets/slide2.png')] bg-cover bg-center bg-no-repeat h-[250px] md:h-[475px] rounded-lg z-10">
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="font-bold md:text-[55px] leading-relaxed mb-4 text-center w-[80%]">
              Adopt{" "}
              <span className="bg-[#00cfff] md:text-[55px] text-white px-2 py-1">
                best development practices
              </span>{" "}
              to produce secure and{" "}
              <span className="bg-[#00cfff] md:text-[55px] text-white px-2 py-1">
                reliable software
              </span>
            </h2>
          </div>
        </div>
      </div>
      {/* <div className="fixed border-0 m-[30px] mb-12 ml-[1209px] bottom-0 bg-[#00cfff] w-[150px] h-[100px] z-0" /> */}
    </div>
  );
};

export default Slide2;
