import portfolio from "../../assets/data/portfolio.json";
import PortfolioCard, { PortfolioCardProps } from "./card";

const Portfolio: React.FC = (): JSX.Element => {
  return (
    <section className="w-full bg-[#151D48] text-white p-4 flex flex-col justify-center items-center">
      <header className="my-8 space-y-4 font-serif text-center w-96 lg:w-[30rem]">
        <h1 className="text-3xl font-semibold">Our Works</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 my-4">
        {portfolio.map((data: PortfolioCardProps, index: number) => (
          <PortfolioCard key={index} {...data} />
        ))}
      </div>
      <button className="rounded bg-blue-600 hover:bg-blue-500 transition-all ease-in-out duration-150 px-6 py-4 mt-5">
        LOAD MORE
      </button>
    </section>
  );
};

export default Portfolio;
