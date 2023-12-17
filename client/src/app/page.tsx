import HomeScene from "./components/HomeScene";
import NameWithGlitch from "./components/NameWithGlitch";
import CVIcon from "./icons/CVIcon";
import GitHubIcon from "./icons/GitHubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";

export default function Home() {
  return (
    <>
      <div
        id="Home"
        className="relative h-[98vh] flex flex-col justify-center items-start"
      >
        <HomeScene />
        <div className="relative flex flex-col items-start left-24">
          <NameWithGlitch text="Hi!" />
          <NameWithGlitch text="I'm Nico" />
          <NameWithGlitch text="FullStack" />
          <NameWithGlitch text="Developer" />
        </div>
        <div className="absolute bottom-4 self-end px-12 inline-flex gap-4">
          <GitHubIcon />
          <LinkedInIcon />
          <CVIcon />
        </div>
      </div>
      <div id="Skills" className="h-screen"></div>
      <div
        id="Project"
        className="inline-block h-screen w-[100vw]"
      ></div>
      <div
        id="AboutMe"
        className="inline-block h-screen w-[100vw]"
      ></div>
      <div
        id="Contact"
        className="inline-block h-screen w-[100vw]"
      ></div>
    </>
  );
}
