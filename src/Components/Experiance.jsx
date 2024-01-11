import React from "react";
import Company from "./Company";
import { works } from "./utils/work";

const Experiance = () => {
  return (
    <div className=" relative flex flex-col items-center  sm:w-[90%]  w-[80%] mx-auto lg:py-2 h-screen">
      <h2 className="text-base lg:text-3xl font-bold font-hand tracking-wide	">
        Work
      </h2>
      <div className="w-full">
        {works.map((work) => {
          return <Company work={work} />;
        })}
      </div>
    </div>
  );
};

export default Experiance;
