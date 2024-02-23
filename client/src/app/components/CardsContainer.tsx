"use client";

import { AnimatePresence, motion } from "framer-motion";
import Card from "./Card";
import { useState } from "react";

export interface CardInfo {
  id: number;
  name: string;
  description: string;
  date: string;
  image: string;
}

export interface Props {
  cards: CardInfo[];
}

const CardsContainer: React.FC<Props> = ({ cards }) => {
  const [selectedCard, setSelectedCard] = useState<Number>(0);

  const handleClick = (index: Number) => {
    setSelectedCard(index);
  };

  return (
    <div className="flex w-10/12 h-[70vh] gap-4">
      <div className="flex items-start justify-center w-1/2 h-full bg-gray-700 p-6">
        <h1 className="text-6xl">{cards[selectedCard.valueOf()].name}</h1>
      </div>
      <AnimatePresence>
        <div className="flex flex-wrap w-1/2 h-full justify-center gap-[2%]">
          {cards.map((card, index) => (
            <motion.div
              className="relative w-[32%] h-[32%] overflow-hidden"
              onClick={() => handleClick(index)}
            >
              <Card key={index} data={card} isClicked={index == selectedCard}/>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default CardsContainer;
