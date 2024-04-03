import React from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap, { gsapApp, tl } from "../Components/utils/gsap";
const Welcome = () => {
  const container = useRef();

  useGSAP(
    () => {
      // gsap.from("#welcome", { x: 360, duration: 1 });

      tl.to("#welcome", {
        // yPercent: -100,
        x: 0,
        opacity: 0,
        duration: 0.5,
        delay: 1,
      });

      gsap.from(
        "#welcome-tag",
        {
          yPercent: -1000,
          stagger: 0.1,

          opacity: 0,
        },
        "+1"
      );
      gsap.to(
        "#welcome-tag",
        {
          yPercent: -1000,
          stagger: 0.1,
          opacity: 1,
        },
        "+1"
      );
      gsap.to("#welcome-tag", {
        // yPercent: -2000,
        stagger: 0.1,
        opacity: 0,
      });
    },
    {
      scope: container,
    }
  );

  return (
    <div
      ref={container}
      className="bg-primary-bg text-primary-text w-screen h-screen font-poppins p-10 overflow-hidden"
    >
      <div
        id="welcome"
        className="flex justify-center items-center w-full h-full text-4xl tracking-wider font-bold "
      >
        Welcome
      </div>
      <div className=" z-0">
        <h1 id="welcome-tag" className="text-4xl my-4  ">
          Frontend Developer
        </h1>
        <h1 id="welcome-tag" className="text-4xl my-4 ">
          React Developer
        </h1>
        <h1 id="welcome-tag" className="text-4xl my-4 ">
          Devops Engineer
        </h1>
      </div>
    </div>
  );
};

export default Welcome;
