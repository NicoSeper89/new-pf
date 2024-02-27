import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import AboutMe from "./components/aboutme/AboutMe";
import Contact from "./components/contact/Contact";

export default function App() {
  return (
    <>
      <div
        id="Home"
        className="relative h-screen overflow-hidden flex flex-col justify-center items-start"
      >
        <Home />
      </div>
      <div
        id="Skills"
        className="relative h-screen overflow-hidden flex justify-center items-center"
      >
        <Skills />
      </div>
      <div
        id="Project"
        className="relative h-screen overflow-hidden flex justify-center items-center"
      >
        <Projects />
      </div>
      <div
        id="AboutMe"
        className="relative h-screen overflow-hidden flex justify-center items-center"
      >
        <AboutMe />
      </div>
      <div
        id="Contact"
        className="relative h-screen overflow-hidden flex justify-center items-center"
      >
        <Contact />
      </div>
    </>
  );
}
