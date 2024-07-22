import React from "react";

const Slide3: React.FC = () => {
  return (
    <div className="relative">
      <div className="fixed border-0 ml-[960px] m-[90px] bg-[#00cfff] w-[150px] h-[100px] z-10" />
      <div className="flex flex-col h-full items-center justify-center text-white p-[100px]">
        <div className="bg-[url('/src/assets/image/home-assets/slide3.png')] bg-cover bg-center bg-no-repeat h-[100%] py-16 rounded-lg z-10">
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
  );
};

export default Slide3;
