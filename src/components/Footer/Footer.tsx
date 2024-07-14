import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faXTwitter,
  faInstagram,
  faLinkedin,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import DummyImg from "../../assets/hd1080.png";

const Footer: React.FC = () => {
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
    <footer className="h-[400px] bg-[#151D48] text-white px-[93px] py-[53px] flex">
      <div className="flex-1 space-y-4">
        <img className="h-[55px]" src={DummyImg} alt="" />
        <p className="text-justify pt-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged
        </p>
        <div className="flex space-x-4 pt-4">
          {socialMedia.map(({ icon, link }, index) => {
            return (
              <div key={index}>
                <a href={link}>
                  <FontAwesomeIcon icon={icon} size="lg" />
                </a>
              </div>
            );
          })}
        </div>
        <p className="text-left pt-3">
          &copy; 2024 15labs.tech - All Right Reserved
        </p>
      </div>

      <div className="flex-1 ">
        <div className="flex justify-end">
          {navFooter.map(({ title, sub }, index) => {
            return (
              <div key={index} className="space-y-2 pl-14 pr-8">
                <p className="text-start font-bold text-[18px]">{title}</p>
                <ul className="text-start space-y-1">
                  {sub.map(({ name, link }, index) => {
                    return (
                      <li key={index}>
                        <Link className="hover:underline" to={link}>
                          {name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
