import React from "react";
import { heroDetails } from "../Components/utils/hero";
import avatar from "../assets/male-avatar.svg";

const Hero = () => {
  const { title, description, exp, desc2, boldsec, rest } = heroDetails;

  return (
    <div className="flex flex-col p-4 lg:flex-row  lg:justify-around lg:items-center sm:w-[90%]  w-[80%] mx-auto lg:py-2 h-screen self-center">
      <div className="w-full lg:w-[30%] ">
        <img src={avatar} alt="profile pic" className="lg:h-30 my-2 " />
      </div>
      <div className="w-full py-4 flex  lg:w-[50%]  flex-col justify-center lg:p-5">
        <h2 className="text-base my-2 lg:mx-auto font-hand lg:text-3xl font-semibold">
          {title}
        </h2>
        <p className="font-hand text-sm lg:text-xl">
          {description} {exp} {desc2} {boldsec} {rest}
        </p>
      </div>
    </div>
  );
};

export default Hero;
