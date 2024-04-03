import React, { forwardRef, useRef } from "react";
import { projects } from "./utils/projects";
import Project from "./Project";
import SmoothScroll from "./SmoothScroll";

const Projects = () => {
  const expRef = useRef();

  const WrappedComponent = forwardRef(({ refforwarded }, ref) => {
    return (
      <div ref={refforwarded} id="projects">
        <div id="abouttrigger">
          <div
            id="project"
            className=" relative flex flex-col items-center w-full  md:w-[80%] mx-auto lg:py-12 h-screen   p-4"
          >
            <h2 className="text-base lg:text-3xl font-bold font-hand tracking-wide 	">
              PROJECTS
            </h2>
            <div className="relative w-[95%] md:w-[90%] flex md:flex-nowrap items-center h-full  no-scrollbar  md:p-2 flex-row  overflow-x-scroll md:mt-6">
              {projects.map((project, i) => {
                return <Project key={i} project={project} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  });

  const EnhancedComponent = SmoothScroll(
    WrappedComponent,
    "projects",
    "abouttrigger",
    "project",
    "top 70%",
    "bottom center",
    null
  );

  return <EnhancedComponent refforwarded={expRef} />;
};

export default Projects;
