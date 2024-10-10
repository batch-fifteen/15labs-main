import React from "react";

interface HeadingBlueProps {
  firstWord: string;
  secondWord: string;
}

const HeadingBlue: React.FC<HeadingBlueProps> = ({ firstWord, secondWord }) => {
  return (
    <h1 className="text-3xl md:text-4xl font-semibold mb-10 text-center font-serif">
      {firstWord} <span className="text-[#47D4E9]">{secondWord}</span>
    </h1>
  );
};

export default HeadingBlue;
