import React, { useEffect } from "react";
import reading from "../assets/reading.svg";
import { skills } from "./utils/skills";
import SkillBubble from "./SkillBubble";

const Skills = () => {
  return (
    <div className=" relative flex flex-col items-center   sm:w-[90%]  w-[80%] mx-auto lg:py-2 h-screen">
      <h2 className="text-base lg:text-3xl font-bold font-hand tracking-wide	">
        SKILLS
      </h2>
      <div className=" flex justify-around flex-wrap mt-4  w-[80%] ">
        {skills.map(({ name, top, left }) => {
          return <SkillBubble name={name} top={top} left={left} key={name} />;
        })}
      </div>

      <img
        src={reading}
        alt="reading"
        className="absolute mx-auto top-[40%] w-[50%] h-[30%] lg:h-[30%] lg:w-[30%]  justify-self-end"
      />
    </div>
  );
};

export default Skills;
