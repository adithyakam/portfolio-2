import React from "react";
import { projects } from "./utils/projects";
import Project from "./Project";

const Projects = () => {
  return (
    <div
      id="project"
      className=" relative flex flex-col items-center  sm:w-[90%]  w-[80%] mx-auto lg:py-12 h-screen   p-4"
    >
      <h2 className="text-base lg:text-3xl font-bold font-hand tracking-wide 	">
        PROJECTS
      </h2>
      <div className="relative w-full md:w-[90%] flex md:flex-nowrap items-start  no-scrollbar  flex-col md:p-2 md:flex-row  overflow-x-scroll mt-6">
        {projects.map((project) => {
          return <Project project={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
