import CardsContainer from "./CardsContainer";

async function getAllProjects() {
  const res = await fetch("http://localhost:8080/api/projects", {
    cache: "no-cache",
  });

  if (!res.ok) {
    return [];
  }

  return res.json();
}

const Projects: React.FC = async () => {
  const response = await getAllProjects();

  return (
    <>
      <CardsContainer cards={response.data} />
    </>
  );
};

export default Projects;
