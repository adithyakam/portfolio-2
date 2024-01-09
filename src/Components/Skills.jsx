import React from "react";
import reading from "../assets/reading.svg";
import { skills } from "./utils/skills.";

const Skills = () => {
  return (
    <div className="flex flex-col items-center   sm:w-[90%]  w-[80%] mx-auto lg:py-2 h-screen">
      <h2 className="text-base lg:text-3xl font-bold font-hand tracking-wide	">
        SKILLS
      </h2>
      <div className="relative  w-full h-full">
        {skills.map(({ name, x, y }) => {
          return (
            <div
              className={`absolute text-sm top-[${x}%] left-[${y}%]  font-mono font-semibold  bg-primary-orange   w-14 h-14 lg:w-20 lg:h-20 rounded-full flex justify-center items-center`}
            >
              {name}
            </div>
          );
        })}
      </div>

      <img
        src={reading}
        alt="reading"
        className="w-[50%] h-[30%] lg:h-[30%] lg:w-[30%]  justify-self-end"
      />
    </div>
  );
};

export default Skills;
