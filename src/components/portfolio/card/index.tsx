import React from "react";

export type PortfolioCardProps = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const PortfolioCard: React.FC<PortfolioCardProps> = (data): JSX.Element => {
  return (
    <div className="bg-white text-black rounded h-96 lg:h-[611px] max-h-full w-full lg:w-[582px]">
      <img
        src={data.image}
        alt={data.title}
        className="w-full h-64 lg:h-[470px] object-center object-cover rounded-t"
      />
      <div className="text-left px-7 py-5 space-y-2">
        <h1 className="font-bold text-xl font-serif">{data.title}</h1>
        <p className="font-Roboto text-justify text-xs lg:text-base">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default PortfolioCard;
