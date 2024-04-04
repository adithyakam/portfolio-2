import React from "react";
import { routes } from "./utils/routes";

const SideMenu = ({ isSideMenu, sideMenu }) => {
  return (
    // <div className="absolute top-[120%] right-[-20%] z-30 bg-primary-bg border p-2 md:right-[-5%] lg:hidden">
    <div className="absolute h-screen w-[30%] top-0 right-0 bg-primary-dark-bg py-10  ">
      <div className="mx-auto w-[2%]" onClick={isSideMenu}>
        <p className="font-semibold text-lg mx-auto w-40">X</p>
      </div>
      <div className="relative mt-10">
        {routes.map((ele) => {
          return (
            <div
              className=" h-full flex flex-col hy-4 items-center justify-center"
              key={ele.title}
            >
              {/* <img alt={ele.title} /> */}
              <a
                href={ele.href}
                className="text font-semibold cursor-pointer font-hand"
                onClick={isSideMenu}
              >
                {ele.title}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideMenu;
