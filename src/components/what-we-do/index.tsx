import React from "react";
import HeadingBlue from "../Heading/HeadingBlue";
import whatWeDo from "../../assets/image/what-we-do/what-we-do.png";

const WhatWeDo = () => {
  return (
    <div className="container mx-auto mt-9">
      <HeadingBlue firstWord="What" secondWord="We Do" />
      <div className="flex flex-col items-center lg:items-start lg:flex-row gap-4">
        <div className="w-full lg:h-[772px] flex flex-col justify-between gap-y-4">
          <div className="w-[98%] p-8 border rounded">
            <p className="text-justify font-serif text-sm lg:text-lg">
              At 15 Labs, we specialize in delivering tailored technology
              products and technical solutions to meet the unique needs of our
              clients. Our core focus is on software development, particularly
              web and mobile applications, where we leverage modern frameworks
              and methodologies to build scalable, efficient platforms.
            </p>
          </div>
          <div className="w-[98%] p-8 border rounded">
            <p className="text-justify font-serif text-sm lg:text-lg">
              Our services extend beyond just development. We offer quality
              assurance to ensure your software performs optimally, penetration
              testing to safeguard your systems, and cloud computing solutions
              to help your business scale securely and efficiently. But our
              mission doesn't stop with technology — we are also committed to
              making the tech world more accessible to everyone.
            </p>
          </div>
          <div className="w-[98%] p-8 border rounded">
            <p className="text-justify font-serif text-sm lg:text-lg">
              We host seminars and courses aimed at students to empower them
              with skills and knowledge needed in today’s tech-driven world.
              Through our education initiatives, we are connecting aspiring tech
              talents with industry professionals. Whether it's offering
              technical solutions or fostering the next generation of
              innovators, we are passionate about driving digital transformation
              across Indonesia.
            </p>
          </div>
        </div>
        <img
          src={whatWeDo}
          alt="what we do"
          className="w-[98%] h-[500px] lg:w-[582px] lg:h-[772px] rounded object-cover object-center"
        />
      </div>
    </div>
  );
};

export default WhatWeDo;
