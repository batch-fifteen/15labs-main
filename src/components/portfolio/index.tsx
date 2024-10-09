import Slider, { Settings } from "react-slick";
import portfolio from "../../assets/data/portfolio.json";
import PortfolioCard, { PortfolioCardProps } from "./card";

const Portfolio: React.FC = (): JSX.Element => {
  const settings: Settings = {
    dots: false,
    centerMode: true,
    infinite: true,
    slidesToShow: 2,
    centerPadding: "65px",
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "70px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "70px",
        },
      },
    ],
  };

  return (
    <section className="w-full bg-[#151D48] text-white p-4 flex flex-col justify-center items-center pb-20">
      <header className="w-96 lg:w-[30rem] my-8 space-y-4 font-serif text-center">
        <h1 className="text-3xl font-semibold">Our Works</h1>
      </header>
      <div className="w-full">
        <Slider {...settings}>
          {portfolio.map((data: PortfolioCardProps, index: number) => (
            <PortfolioCard key={index} {...data} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Portfolio;
