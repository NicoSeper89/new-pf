import { MotionProps, motion } from "framer-motion";
import { CardInfo } from "./CardsContainer";

export interface Props extends MotionProps {
  data: CardInfo;
  isClicked: Boolean;
}

const Card: React.FC<Props> = ({ data, isClicked }) => {
  const img = "data:image/png;base64," + data.image;

  return (
    <motion.div className="flex flex-col justify-center items-center h-full w-full box-border overflow-hidden"
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={101}
        height={101}
        fill="#ccc"
        version="1.1"
        className="flex justify-center items-center z-10 text-center"
      >
        <motion.path
          fillRule="evenodd"
          d={data.svg_path}
          fill={(!isClicked ? "#cccccc" : data.hex_color) + "70"}
          clipRule="evenodd"
        />
      </motion.svg>
    </motion.div>
  );
};

export default Card;
