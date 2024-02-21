export interface Card {
  id: number;
  name: string;
  description: string;
  date: Date;
}

export interface Props {
  cards: Card[];
}

const CardsContainer: React.FC<Props> = ({ cards }) => {
  return (
    <div>
      {cards.map((card) => (
        <div>{card.name}</div>
      ))}
    </div>
  );
};

export default CardsContainer;
