import React, { forwardRef, useRef } from "react";
import { aboutDetails } from "./utils/about";
import avatar from "../assets/male-avatar.svg";
import SmoothScroll from "./SmoothScroll";
import { skills } from "./utils/skills";

const About = () => {
  const { title, description, name, exp, desc2, boldsec, rest, skills } =
    aboutDetails;
  const aboutComp = useRef();

  const WrappedComp = forwardRef(({ refforwarded }, ref) => {
    // console.log(refforwarded, "ref");
    return (
      <div ref={refforwarded} id="about">
        <div id="abouttrigger">
          <div
            id="home"
            className="about relative flex flex-col items-center w-full md:w-[80%] mx-auto lg:py-12 h-screen"
          >
            <h2 className="text-base lg:text-3xl font-bold font-poppins tracking-wide text-primary-white">
              About ME
            </h2>
            <div className="flex flex-col my-4 p-4 lg:flex-row lg:justify-around lg:items-start w-full md:w-[80%] mx-auto lg:py-2 h-screen self-center">
              <div className="w-full lg:w-[30%] flex flex-col items-center">
                <h2 className="text-primary-white text-base font-semibold">
                  Skills
                </h2>
                <div className="flex flex-wrap mt-2">
                  {skills.map((skill) => {
                    return (
                      <div
                        key={skill}
                        className="text-sm md:text-base p-1 border text-primary-green border-y-primary-green m-2 rounded-md bg-primary-green-ligth"
                      >
                        {skill}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="w-full   flex lg:w-[50%] flex-col justify-center ">
                <h2 className="text-xs   md:text-base  lg:mx-auto font-poppins lg:text-base font-semibold text-primary-white">
                  {title} {name}
                </h2>
                <p className="font-poppins text-xs md:text-sm lg:text-base">
                  {description} {exp} {desc2} {boldsec}
                </p>
                <p className="font-poppins text-xs  md:text-sm lg:text-base mt-2">
                  {rest}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  const EnhancedComponent = SmoothScroll(
    WrappedComp,
    "about",
    "abouttrigger",
    "home",
    "top 70%",
    "bottom center",

    null
  );

  return <EnhancedComponent refforwarded={aboutComp} />;
};

export default About;
