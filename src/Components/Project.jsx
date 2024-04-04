import React from "react";

const Project = ({ project }) => {
  return (
    <div className="flex flex-col lg:flex-row h-[30%] md:h-[50%] lg:h-[30%] items-center m-2 w-full md:flex-shrink-0 p-1 md:p-4 md:mx-2  md:w-[40%] border border-primary-dark-text rounded-lg">
      <div className="object-fill">
        <img
          src={project.image}
          className="w-full h-full"
          alt="project-image"
        />
      </div>
      <div className=" flex flex-col p-2">
        <h1 className="font-bold text-sm md:text-base text-primary-white">
          {project.name}
        </h1>
        <h3 className="font-bold text-[6px] lg:text-[10px] mt-1">
          {project.tech.split(",").map((tech, index) => (
            <span key={index} className="mr-1 whitespace-break-spaces">
              {tech.trim()}
              {index < project.tech.split(",").length - 1 && ","}
            </span>
          ))}
        </h3>

        <div className="flex items-center justify-around mt-2">
          {["Demo", "Github"].map((buttonLabel, index) => (
            <button
              key={index}
              onClick={() => {
                window.open(index === 0 ? project.live : project.git, "_blank");
              }}
              className="p-1 text-primary-white mx-1 text-xs md:text-sm md:p-2 tracking-wide font-bold border rounded-xl border-primary-dark-text hover:bg-primary-dark-text hover:text-primary-bg"
            >
              {buttonLabel}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
