import React from "react";
import { routes } from "./utils/routes";

const SideMenu = () => {
  return (
    <div className="absolute top-[120%] right-[-20%] z-30 bg-primary-bg border p-2 md:right-[-5%] lg:hidden">
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
  );
};

export default SideMenu;
