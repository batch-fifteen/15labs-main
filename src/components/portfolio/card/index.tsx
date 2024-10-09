import React from "react";

export type PortfolioCardProps = {
  id: number;
  title: string;
  description: string;
  technology: string;
  image: string;
};

const PortfolioCard: React.FC<PortfolioCardProps> = (data): JSX.Element => {
  return (
    <div className="bg-white text-black rounded h-full lg:h-[30rem] w-72 lg:w-[36rem]">
      <img
        src={data.image}
        alt={data.title}
        className="w-full h-64 object-center object-cover rounded-t"
      />
      <div className="text-left px-7 py-5 space-y-3">
        <div>
          <h1 className="font-bold text-xl font-serif">{data.title}</h1>
          <p className="font-Roboto text-justify text-xs lg:text-base">
            {data.description}
          </p>
        </div>
        <div>
          <h2 className="font-bold text-gray-700 font-serif">Teknologi</h2>
          <p className="font-Roboto text-justify text-xs text-gray-700">
            {data.technology}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
