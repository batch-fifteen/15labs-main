import ReactImg from "../../assets/image/our-tech/reactjs.png";
import BootstrapImg from "../../assets/image/our-tech/bootstrap.png";
import TailwindImg from "../../assets/image/our-tech/tailwind.png";
import AngularImg from "../../assets/image/our-tech/angular.png";
import NextImg from "../../assets/image/our-tech/next.png";
import NestImg from "../../assets/image/our-tech/nest.png";
import PostgreImg from "../../assets/image/our-tech/postgre.png";
import MongoImg from "../../assets/image/our-tech/mongo.png";
import FlaskImg from "../../assets/image/our-tech/flask.png";
import RabbitMQImg from "../../assets/image/our-tech/rabbitmq.png";
import DockerImg from "../../assets/image/our-tech/docker.png";
import RedisImg from "../../assets/image/our-tech/redis.png";
import ZAPImg from "../../assets/image/our-tech/zap.png";
import AWSImg from "../../assets/image/our-tech/aws.png";
import KatalonImg from "../../assets/image/our-tech/katalon.png";
import HeadingBlue from "../Heading/HeadingBlue";

export default function OurTechnology() {
  const imgTech: { img: string; alt: string }[] = [
    {
      img: ReactImg,
      alt: "ReactJS",
    },
    {
      img: BootstrapImg,
      alt: "Bootstrap",
    },
    {
      img: TailwindImg,
      alt: "Tailwind",
    },
    {
      img: AngularImg,
      alt: "Angular",
    },
    {
      img: NextImg,
      alt: "NextJS",
    },
    {
      img: NestImg,
      alt: "NestJS",
    },
    {
      img: PostgreImg,
      alt: "PostgreSQL",
    },
    {
      img: MongoImg,
      alt: "MongoDB",
    },
    {
      img: FlaskImg,
      alt: "Flask",
    },
    {
      img: RabbitMQImg,
      alt: "RabbitMQ",
    },
    {
      img: DockerImg,
      alt: "Docker",
    },
    {
      img: RedisImg,
      alt: "Redis",
    },
    {
      img: ZAPImg,
      alt: "ZAP",
    },
    {
      img: AWSImg,
      alt: "AWS",
    },
    {
      img: KatalonImg,
      alt: "Katalon",
    },
  ];
  return (
    <div className="container w-full flex flex-col items-center pt-4 pl-4 pr-4 pb-24 mt-16">
      <HeadingBlue firstWord="Our" secondWord="Technology" />
      <div className="flex flex-wrap justify-center gap-4">
        {imgTech.map(({ img, alt }, index) => (
          <div key={index} className="flex justify-center pb-6 basis-32">
            <img src={img} alt={alt} className="h-24 w-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}
