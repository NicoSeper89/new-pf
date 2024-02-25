"use client";

import { AnimatePresence, motion } from "framer-motion";
import Card from "./Card";
import { useState } from "react";
import Link from "next/link";

export interface CardInfo {
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
  cards: CardInfo[];
}

const variantsBox = {
  selected: () => ({
    rotateY: [0, 180, 0],
    transition: {
      duration: 2.2,
      type: "tween"
    }
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
    <>
      <div className="flex flex-col items-start justify-start w-full h-full">
        <h2 className="text-4xl">{cards[selectedCardIndex].position}</h2>
        <h3 className="text-3xl">
          {cards[selectedCardIndex].organization}
        </h3>
        <div className="relative w-full h-1 bg-[#ff200380] my-2" />
        <p className="text-justify">
          {cards[selectedCardIndex].description}
        </p>
        <br />
        <span>{cards[selectedCardIndex].date.slice(0, 7)}</span>
        <br />
        <Link
          href={cards[selectedCardIndex].repository_link}
          target="_blank"
        >
          Repository
        </Link>
      </div>
      <AnimatePresence>
        <div className="flex w-full justify-between items-center">
          <button
            onClick={() => {
              let cardNumber =
                selectedCardIndex == 0
                  ? cards.length - 1
                  : selectedCardIndex.valueOf() - 1;
              setselectedCardIndex(cardNumber);
            }}
          >
            {"<"}
          </button>
          <div className="flex h-[12rem]">
            {cards.map((card, index) => (
              <motion.div
                className={`flex relative h-[10rem] w-[10rem] bg-gradient-to-tr from-[#25252560] from-35% to-[#5e5e5e45]`}
                onClick={() => handleClick(index)}
                key={index}
                variants={variantsBox}
                animate={selectedCardIndex != index ? "unselected" : "selected"}
              >
                <Card data={card} isClicked={index == selectedCardIndex} />
              </motion.div>
            ))}
          </div>
          <button
            onClick={() => {
              let cardNumber =
                selectedCardIndex == cards.length - 1
                  ? 0
                  : selectedCardIndex + 1;
              setselectedCardIndex(cardNumber);
            }}
          >
           <span > {">"} </span>
          </button>
        </div>
      </AnimatePresence>
    </>
  );
};

export default CardsContainer;
