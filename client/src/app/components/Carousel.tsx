import CardsContainer from "./CardsContainer";

async function getAllProjects() {
  const res = await fetch('http://localhost:8080/api/projects')
 
  if (!res.ok) {
    return [];
  }
 
  return res.json()
}

const Carousel: React.FC = async () => {

  const response = await getAllProjects()

  return (
    <>
      <CardsContainer cards={response.data} />
      <div className="absolute bg-green-500 self-start left-10 p-2 rounded-lg">
        <button>
          Prev
        </button>
      </div>
      <div className="absolute bg-red-500 self-end right-10 p-2 rounded-lg">
        <button>
          Next
        </button>
      </div>
    </>
  );
};

export default Carousel;
