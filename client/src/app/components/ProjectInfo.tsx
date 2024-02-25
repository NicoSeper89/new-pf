import React from "react";
import Link from "next/link";
import { Project } from "./CardsContainer";

interface Props {
  project: Project;
}

const ProjectInfo: React.FC<Props> = ({ project }) => {
  return (
    <div className="flex flex-col gap-3 text-[#999] ">
      <div className="flex justify-between text-3xl items-start">
        <span className={`text-6xl font-light`}>
          {project.name.toUpperCase()}
        </span>
        <Link href={project.repository_link} target="_blank">
          ...
        </Link>
      </div>
      <span className="text-4xl font-bold">{project.position}</span>
      <div className="flex justify-between text-3xl">
        <span>{project.organization}</span>
        <span>{project.date.slice(0, 4)}</span>
      </div>
      <p className="text-justify text-sm font-semibold text-[#999] italic py-5">
        {project.description}
      </p>
    </div>
  );
};

export default ProjectInfo;
