import React from "react";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faXTwitter,
  faInstagram,
  faLinkedin,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import Logo15labs from "../../assets/logo.svg";

const Footer: React.FC = () => {
  const navigateFooterLogo: NavigateFunction = useNavigate();

  const navFooter: { title: string; sub: { name: string; link: string }[] }[] =
    [
      {
        title: "Services",
        sub: [
          { name: "About Us", link: "#" },
          { name: "Online Course", link: "#" },
          { name: "Class", link: "#" },
          { name: "Event", link: "#" },
          { name: "Help Center", link: "#" },
        ],
      },
      {
        title: "Company",
        sub: [
          { name: "About", link: "#" },
          { name: "Contact", link: "#" },
          { name: "Responsibility", link: "#" },
          { name: "Career", link: "#" },
          { name: "Social Media", link: "#" },
        ],
      },
      {
        title: "Terms",
        sub: [
          { name: "Terms & Condition", link: "#" },
          { name: "Condition", link: "#" },
          { name: "Privacy Policy", link: "#" },
          { name: "Cookie Policy", link: "#" },
        ],
      },
    ];

  const socialMedia: { icon: IconDefinition; link: string }[] = [
    { icon: faInstagram, link: "#" },
    { icon: faLinkedin, link: "#" },
    { icon: faSquareFacebook, link: "#" },
    { icon: faXTwitter, link: "#" },
  ];

  return (
    <footer className="bg-[#151D48] text-white text-center py-8 px-4 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-8 md:mb-0 w-full">
          <img
            className="h-[55px] cursor-pointer"
            src={Logo15labs}
            alt="15Labs Logo"
            onClick={() => navigateFooterLogo("/")}
          />
          <p className="text-sm md:text-base text-justify mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <div className="flex space-x-4 mt-4">
            {socialMedia.map(({ icon, link }, index) => (
              <a
                key={index}
                href={link}
                className="text-white hover:text-gray-300"
              >
                <FontAwesomeIcon icon={icon} size="lg" />
              </a>
            ))}
          </div>
          <p className="text-sm text-left mt-4">
            &copy; 2024 15labs.tech - All Rights Reserved
          </p>
        </div>

        <div className="flex justify-around text-left w-full">
          {navFooter.map(({ title, sub }, index) => (
            <div key={index} className="mb-5">
              <p className="font-bold text-lg mb-2">{title}</p>
              <ul className="space-y-2">
                {sub.map(({ name, link }, index) => (
                  <li key={index}>
                    <Link
                      className="hover:underline text-sm md:text-base"
                      to={link}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
