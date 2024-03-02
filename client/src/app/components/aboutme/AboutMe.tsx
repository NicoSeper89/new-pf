import React from "react";
import Image from "next/image";
import Water3DScene from "./Water3DScene";

interface Props {}

const AboutMe: React.FC<Props> = () => {
  return (
    <>
      <div className="relative h-full w-full flex justify-start items-center text-justify">
        <Water3DScene />
        <div className="relative flex justify-center items-center w-[40%] h-[80%] left-20 bg-[#1B1B1Bf2] px-8 py-12">
          <div className="relative grid grid-cols-6 grid-rows-6 gap-7 h-full">
            <div className="row-span-6 col-span-4 flex flex-col justify-start items-start gap-6">
              <span className="text-5xl font-local">Aboute Me</span>
              <p className="text-md">
                Soy Rosario (Argentina), Full Stack Developer con background en
                Ingeniería en Sistemas de Información. Terminé hace más de un
                año el bootcamp en Henry de 800 horas teórico-práctico y desde
                entonces me capacito a diario sobre el mundo de la programación,
                tomando cursos, investigando por cuenta propia y realizando
                proyectos con múltiples tecnologías. Además, perfecciono mi
                nivel de inglés en una academia de idiomas de la ciudad. Cuento
                con experiencia en equipos de desarrollo de software utilizando
                Scrum como metodología ágil, Jira o Trello para organizar tareas
                y Git/GitHub para el control de versiones.
              </p>
            </div>
            <div className="row-span-2 col-span-2 flex justify-center items-center rounded-full overflow-hidden scale-100">
              <Image src={"/image-modified.png"} alt="imgprofile" fill />
            </div>
            <div className="row-span-4 col-span-2 pt-5 text-md">
              <p>Adaptabilidad</p>
              <p>Adaptabilidad</p>
              <p>Adaptabilidad</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
