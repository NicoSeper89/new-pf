import Card from "./Card";

export interface Card {
  id: number;
  name: string;
  description: string;
  date: string;
  image: string;
}

export interface Props {
  cards: Card[];
}

const CardsContainer: React.FC<Props> = ({ cards }) => {
  return (
    <div className="flex w-10/12 h-[70vh] gap-4">
      <div className="flex items-start justify-center w-1/2 h-full bg-gray-700 p-6">
        <h1 className="text-6xl">{cards[0].name}</h1>
      </div>
      <div className="flex flex-wrap w-1/2 h-full justify-center gap-[2%]">
        {cards.map((card, index) => (
          <Card key={index} data={card} />
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;
