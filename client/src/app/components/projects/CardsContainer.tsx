"use client";

import { AnimatePresence, motion } from "framer-motion";
import Card from "./Card";
import { useState } from "react";
import ProjectInfo from "./ProjectInfo";

export interface Project {
  id: number;
  name: string;
  organization: string;
  position: string;
  description: string;
  date: string;
  image: string;
  repository_link: string;
  deploy_link: string;
  svg_path: string;
  hex_color: string;
}

export interface Props {
  cards: Project[];
}

const variantsBox = {
  selected: () => ({
    rotateY: [0, 180, 0],
    transition: {
      duration: 2.2,
      type: "tween",
    },
  }),
  unselected: (color: string) => ({
    rotateY: 0,
  }),
};

const CardsContainer: React.FC<Props> = ({ cards }) => {
  const [selectedCardIndex, setselectedCardIndex] = useState<number>(0);

  const handleClick = (index: number) => {
    setselectedCardIndex(index);
  };

  return (
    <div className="flex items-start relative box-border w-screen h-full pt-20">
      <AnimatePresence>
        <div className="flex flex-wrap w-5/12 justify-center items-start overflow-hidden gap-4">
          {cards.map((card, index) => (
            <motion.div
              className={`flex relative bg-[${index == selectedCardIndex?"#1f1f1f": "#141416"}] p-7 rounded-md`}
              onClick={() => handleClick(index)}
              key={index}
              variants={variantsBox}
              animate={selectedCardIndex != index ? "unselected" : "selected"}
            >
              <Card data={card} isClicked={index == selectedCardIndex} />
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
      <div
        className="flex justify-center relative h-[92%] w-7/12 overflow-hidden bg-[#1f1f1f] rounded-l-xl bg-opacity-75"
      >
        <div className="flex flex-col justify-between items-end w-11/12 h-full pt-10 pb-4">
          <ProjectInfo project={cards[selectedCardIndex]} />
        </div>
      </div>
    </div>
  );
};

export default CardsContainer;

// Next/Previous BUTTONS

{
  /* <button
            onClick={() => {
              let cardNumber =
                selectedCardIndex == 0
                  ? cards.length - 1
                  : selectedCardIndex.valueOf() - 1;
              setselectedCardIndex(cardNumber);
            }}
          >
            {"<"}
          </button> */
}

{
  /* <button
            onClick={() => {
              let cardNumber =
                selectedCardIndex == cards.length - 1
                  ? 0
                  : selectedCardIndex + 1;
              setselectedCardIndex(cardNumber);
            }}
          >
           <span > {">"} </span>
          </button> */
}

// IMAGE

{
  /* <div className="relative w-1/3">
          <Image
            fill
            src={"data:image/png;base64," + cards[selectedCardIndex].image}
            alt={cards[selectedCardIndex].id + "image"}
          />
        </div> */
}
