import { Card } from "./CardsContainer";
import Image from "next/image";

export interface Props {
  data: Card;
}

const CardsContainer: React.FC<Props> = ({ data }) => {
  const img = "data:image/png;base64," + data.image;

  return (
      <div
        className="flex flex-col justify-center items-center w-[32%] h-[32%]"
        style={{ backgroundColor: " hsla(250, 90%, 25%, 1)" }}
      >
        {/* <div className="relative w-full h-16">
          <Image src={img} alt={data.id + "projectImage"} fill={true} className="w-full h-full object-contain" />
        </div>
        <samp className="w-32 h-32">{data.name}</samp>
        <samp className="">{data.description}</samp>
        <samp className="">{data.date}</samp> */}x
      </div>
  );
};

export default CardsContainer;
