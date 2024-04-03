import React from "react";
import { heroDetails } from "./utils/hero";
import avatar from "../assets/male-avatar.svg";

const Hero = () => {
  const { title, name, description, exp, desc2, boldsec, rest } = heroDetails;

  return (
    <div className=" p-4 w-full  h-screen self-center md:w-3/4 mx-auto  ">
      <div className="w-full py-4   md:w-[80%] mx-auto mt-4">
        <h2 className="text-sm md:text-base my-2 p-1  text-primary-green  mx-auto font-poppins md:p-4">
          {title}
        </h2>
        <h2 className="text-2xl mt-2 md:text-4xl lg:text-6xl text-primary-light-text md:my-1 md:mt-4 font-poppins font-semibold tracking-widest">
          {name}
        </h2>
        <h2 className="text-lg md:text-xl lg:text-3xl font-poppins my-4 font-semibold tracking-widest">
          {description}
        </h2>
        <p className="font-poppins text-xs md:text-sm lg:text-base tracking-wide mt-6 w-1/2 text-primary-dark-text ">
          {desc2}
        </p>
      </div>
    </div>
  );
};

export default Hero;
