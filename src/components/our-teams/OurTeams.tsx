import React from "react";
import listTeams from "../../assets/data/teams.json";
import TeamsCards from "./TeamsCards";
import Slider, { CustomArrowProps, Settings } from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import HeadingBlue from "../Heading/HeadingBlue";

function CustomPrevArrow({ onClick }: CustomArrowProps): React.ReactElement {
  return (
    <div
      className="text-white bg-[#151D48] cursor-pointer z-10 shadow-[0_4px_10px_rgba(0,0,0,0.5)]
                rounded-full w-[12] h-12 flex justify-center items-center
                absolute top-1/3 transform -translate-y-1/2 left-0"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faCircleChevronLeft} beat size="3x" />
    </div>
  );
}

function CustomNextArrow({ onClick }: CustomArrowProps): React.ReactElement {
  return (
    <div
      className="text-white bg-[#151D48] cursor-pointer shadow-[0_4px_10px_rgba(0,0,0,0.5)]
                rounded-full w-9 h-9 flex justify-center items-center
                absolute top-1/3 transform -translate-y-1/2 right-0"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faCircleChevronRight} beat size="3x" />
    </div>
  );
}

export default function OurTeams(): React.ReactElement {
  const settings: Settings = {
    dots: false,
    centerMode: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="container w-full flex flex-col items-center pt-4 pl-4 pr-4 pb-24">
      <HeadingBlue firstWord="Our" secondWord="Teams" />
      <div className="w-full">
        <Slider {...settings} className="z-0">
          {listTeams.map(({ id, nickname, photo, role, alt }) => (
            <TeamsCards
              key={id}
              nickname={nickname}
              photo={photo}
              role={role}
              alt={alt}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}
