import React, { useEffect, useRef } from "react";

const Slide3: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src = "/src/assets/image/home-assets/slide3.png";
    img.loading = "lazy";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (divRef.current) {
              divRef.current.style.backgroundImage = `url(${img.src})`;
            }
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);

  return (
    <div className="relative">
      {/* <div className="fixed border-0 ml-[1209px] mb-9 m-[30px] bg-[#00cfff] w-[150px] h-[100px] z-10" /> */}
      <div className="flex flex-col h-full items-center justify-center text-white p-12">
        <div
          ref={divRef}
          className="bg-cover bg-center bg-no-repeat h-[250px] md:h-[475px] rounded-lg z-10"
          style={{ backgroundImage: "none" }}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="font-bold md:text-[55px] leading-relaxed mb-4 text-center w-[80%]">
              Build long-term{" "}
              <span className="bg-[#00cfff] md:text-[55px] text-white px-2 py-1">
                relationships
              </span>{" "}
              with{" "}
              <span className="bg-[#00cfff] md:text-[55px] text-white px-2 py-1">
                clients based on trust
              </span>
              and
              <span className="bg-[#00cfff] md:text-[55px] text-white px-2 py-1">
                integrity
              </span>
            </h2>
          </div>
        </div>
      </div>
      {/* <div className="fixed border-0 m-[30px] mb-12 bottom-0 bg-[#00cfff] w-[150px] h-[100px] z-0" /> */}
    </div>
  );
};

export default Slide3;
