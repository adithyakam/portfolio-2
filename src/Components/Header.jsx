import React, { useRef, useState } from "react";
import hamburger from "../assets/hamvurger-lightmode.svg";
import { routes } from "./utils/routes";

import gsap, { gsapApp, tl } from "../Components/utils/gsap";
import { useGSAP } from "@gsap/react";

import SideMenu from "../Components/SideMenu";

const Header = () => {
  const [sideMenu, setsideMenu] = useState(false);
  const header = useRef();
  useGSAP(
    () => {
      gsap.from("#menuitems", {
        y: -500,
        ease: "bounce.in",
        stagger: 0.04,
      });

      gsap.to("#menuitems", {
        duration: 0.5,
        opacity: 1,
        ease: "bounce.in",
        stagger: 0.02,
      });
    },
    {
      scope: header,
    }
  );

  const isSideMenu = () => {
    setsideMenu(!sideMenu);
  };

  return (
    <div
      ref={header}
      className="  p-2 top-0 bg-primary-bg z-20 w-[95%] mx-auto"
    >
      <div className="z-10 mt-2 flex justify-between items-center sm:w-[90%] sm:py-0 w-[70%] mx-auto py-2 sticky tracking-widest">
        <div className="w-[30%}">
          <h1
            id="menuitems"
            className="text-xl font-bold cursor-pointer font-poppins"
          >
            Adithya
          </h1>
        </div>
        <div className="w-[20%] md:w-[30%] lg:[50%]">
          <img
            src={hamburger}
            className="sm:p-0 sm:m-0 sm:block lg:hidden md:block"
            onClick={isSideMenu}
          />
          {sideMenu ? <SideMenu /> : null}

          <div className=" hidden lg:flex lg:justify-around  items-center">
            {routes.map((ele) => {
              return (
                <div className="flex" key={ele.title}>
                  {/* <img alt={ele.title} /> */}
                  {!ele.resume ? (
                    <a
                      id="menuitems"
                      href={ele.href}
                      className="text-sm text-nowrap font-semibold cursor-pointer font-poppins lg:mx-2"
                    >
                      {ele.title}
                    </a>
                  ) : (
                    <button
                      title="resume-adithya-kamath"
                      onClick={() => {
                        window.open(
                          "https://portfolio-assts.s3.ap-south-1.amazonaws.com/resume.pdf",
                          "_blank"
                        );
                      }}
                      id="menuitems"
                      className="text-base text-primary-green font-medium border border-primary-green  p-2"
                    >
                      Resume
                    </button>
                  )}
                </div>
              );
            })}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
