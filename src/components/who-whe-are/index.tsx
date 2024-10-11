import React from "react";

const WhoWheAre: React.FC = (): JSX.Element => {
  return (
    <div className="relative p-5 lg:p-16 container mx-auto">
      <div className="absolute top-5 left-0 p-28 bg-gray-100/80 -z-30"></div>
      <div className="absolute bottom-0 right-0 p-28 bg-gray-100/80 -z-30"></div>
      <h1 className="text-3xl md:text-4xl font-semibold mb-10 font-serif">
        Who <span className="text-[#47D4E9]">We Are</span>
      </h1>

      <div className="bg-gray-300 p-6 rounded grid grid-cols-1 lg:grid-cols-3 gap-6 font-serif">
        <p className="text-justify">
          At 15 Labs, we are a dedicated team of innovators passionate about
          providing cutting-edge software solutions and technological services.
          Founded in 2024, we started as a group of friends from diverse
          backgrounds who shared a vision of pushing technological advancement.
          What began as a humble dream, has grown into a software house that
          focuses on empowering businesses and enterprises to thrive in the
          digital age.
        </p>
        <p className="text-justify">
          Our slogan, "Innovating Tomorrow, Today," embodies our commitment to
          creating forward-thinking solutions that drive progress. Guided by our
          vision of "Providing fair and efficient solutions for all," we strive
          to produce secure, reliable, and innovative software that enhances
          productivity and efficiency. We value trust and integrity in building
          long-term relationships with our clients, and we integrate the latest
          technologies to stay ahead of the curve.
        </p>
        <p className="text-justify">
          Sustainability and social responsibility are also integral to our
          mission, which is why we actively engage in educational initiatives,
          support the open-source community, and participate in social
          assistance programs. At 15 Labs, we are not just building software; we
          are building a better future.
        </p>
      </div>
    </div>
  );
};

export default WhoWheAre;
