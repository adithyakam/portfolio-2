import React, { useState } from "react";
import down from "../assets/down.svg";
import up from "../assets/up.svg";

const Roles = ({ roles }) => {
  const { role, from, to, desc, collapse } = roles;

  return (
    <div className={` bg-primary-green-ligth m-4 p-2 `}>
      <div className="flex justify-between items-center ">
        <div>
          <h1 className="text-sm font-semibold text-[12px] md:text-base">
            {role}
          </h1>
          <h3 className="font-medium text-[8px] md:text-xs text-primary-dark-text">
            {from} - {to}
          </h3>
        </div>
      </div>
      <div className="mt-2">
        {desc.map((point, i) => (
          <h5 className="text-[8px] md:text-sm my-1" key={i}>
            - {point}
          </h5>
        ))}
      </div>
    </div>
  );
};

export default Roles;
