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
    <>
      <div className="flex flex-col items-start justify-start w-full h-full">
        <h2 className="text-4xl">{cards[selectedCard.valueOf()].position}</h2>
        <h3 className="text-3xl">
          {cards[selectedCard.valueOf()].organization}
        </h3>
        <div className="relative w-full h-1 bg-red-600 my-2" />
        <p className="text-justify">{cards[selectedCard.valueOf()].description}</p>
        <br />
        <span>{cards[selectedCard.valueOf()].date.slice(0, 7)}</span>
        <br />
        <Link href={cards[selectedCard.valueOf()].repository_link} target="_blank">Repository</Link>
      </div>
      <AnimatePresence>
        <div className="flex w-full justify-between items-center">
          <button
            onClick={() => {
              let cardNumber =
                selectedCard == 0 ? cards.length - 1 : selectedCard.valueOf() - 1;
              setSelectedCard(cardNumber);
            }}
          >
            Prev
          </button>
          <div className="flex flex-wrap">
            {cards.map((card, index) => (
              <motion.div
                className="relative h-[8rem] w-[9rem] overflow-hidden"
                onClick={() => handleClick(index)}
              >
                <Card
                  key={index}
                  data={card}
                  isClicked={index == selectedCard}
                />
              </motion.div>
            ))}
          </div>
          <button
            onClick={() => {
              let cardNumber =
                selectedCard == cards.length - 1
                  ? 0
                  : selectedCard.valueOf() + 1;
              setSelectedCard(cardNumber);
            }}
          >
            Next
          </button>
        </div>
      </AnimatePresence>
    </>
  );
};

export default CardsContainer;
