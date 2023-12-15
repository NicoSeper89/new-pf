import HomeScene from "./components/HomeScene";
import CVIcon from "./icons/CVIcon";
import GitHubIcon from "./icons/GitHubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";

export default function Home() {
  return (
    <>
      <div id="Home" className="relative h-[98vh] p-0">
        <HomeScene />
        <div className="absolute inline-flex justify-center items-start gap-4 bottom-4 right-5">
          <GitHubIcon />
          <LinkedInIcon />
          <CVIcon />
        </div>
      </div>
      <div id="Skills" className="bg-[#192260] h-screen w-[100.5vw]">
        
      </div>
      <div id="Project" className="inline-block bg-[#0E0E0E] h-screen w-[100.5vw]">
        
      </div>
      <div id="AboutMe" className="inline-block bg-[#0055AA] h-screen w-[100.5vw]">
        
      </div>
      <div id="Contact" className="inline-block bg-[#0E0E0E] h-screen w-[100.5vw]">
        
      </div>
    </>
  );
}
