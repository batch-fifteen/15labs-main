import React from "react";
import CardLogo from "../../assets/image/our-services/react-our-services.svg";

interface IServices {
  title: string;
  description: string;
}

const DataOurServices: IServices[] = [
  {
    title: "Web Development",
    description:
      "We offer top-notch web development using leading frameworks and technologies, including Spring Boot, React, Angular, Laravel, Nest.js, Express, and Flask. Whether it's a full-fledged web application or a tailored solution, we have the expertise to deliver.",
  },
  {
    title: "Android Development",
    description:
      "Our team builds high-performance, user-friendly Android applications designed to meet your business objectives.",
  },
  {
    title: "Penetration Testing",
    description:
      "Using industry-standard tools such as OWASP ZAP, we provide thorough penetration testing services to identify and mitigate vulnerabilities in your systems.",
  },
  {
    title: "Cloud Computing",
    description:
      "We offer AWS-based cloud solutions to help businesses manage their infrastructure efficiently, enabling scalability and enhanced security.",
  },
  {
    title: "Quality Assurance",
    description:
      "Our Katalon-powered QA services ensure your software is rigorously tested and delivered with the highest standards of reliability and performance.",
  },
  {
    title: "Education Hub",
    description:
      "We are deeply committed to education and career development. Through our campus webinars, career consultations, practical courses, and thesis consultations, we provide valuable learning opportunities and connect students with experienced professionals to prepare them for the tech industry.",
  },
];

const OurServices: React.FC = () => {
  return (
    <div className="bg-[#335EF7] my-9 w-full h-full">
      <div className="container mx-auto p-4 py-10 text-white">
        <h1 className="text-center text-3xl md:text-4xl font-semibold mb-6 font-serif">
          Our Service
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-y-16 py-6">
          {DataOurServices.map((data: IServices, index: number) => (
            <CardOurServices key={index} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};

const CardOurServices: React.FC<IServices> = ({ title, description }) => {
  return (
    <div className="bg-white text-black p-5 w-96 h-56 font-serif relative">
      <img
        src={CardLogo}
        alt="Logo"
        className="absolute -top-10 -left-10 h-28 w-28"
      />
      <h1 className="font-bold text-xl ml-12">{title}</h1>
      <p className="text-sm text-justify mt-3">{description}</p>
    </div>
  );
};

export default OurServices;
