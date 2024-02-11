import React, { useState } from "react";
import hamburger from "../assets/hamvurger-lightmode.svg";
import { routes } from "./utils/routes";

import { gsap } from "gsap";
import SideMenu from "../Components/SideMenu";

const Header = () => {
  const [sideMenu, setsideMenu] = useState(true);

  // gsap.to(".square", { rotate: 360 });

  const isSideMenu = () => {
    // console.log("side");
    setsideMenu(!sideMenu);
  };

  return (
    <div className=" border-b-2 border-b-primary-dark-text sticky p-2 top-0 bg-primary-bg z-20 w-[95%] mx-auto">
      <div className="flex justify-between items-center sm:w-[90%] sm:py-0 w-[70%] mx-auto py-2 sticky">
        <div className="w-[30%}">
          <h1 className="text-xl font-bold cursor-pointer font-hand">
            Adithya
          </h1>
        </div>
        <div className="w-[20%] md:w-[30%] lg:[40%]">
          <img
            src={hamburger}
            className="sm:p-0 sm:m-0 sm:block lg:hidden md:hidden"
            onClick={isSideMenu}
          />
          {sideMenu ? <SideMenu /> : null}

          <div className=" hidden lg:flex lg:justify-around ">
            {routes.map((ele) => {
              return (
                <div className="flex" key={ele.title}>
                  {/* <img alt={ele.title} /> */}
                  <a
                    href={ele.href}
                    className="text font-semibold cursor-pointer font-hand"
                  >
                    {ele.title}
                  </a>
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
