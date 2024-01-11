import React, { useState } from "react";
import down from "../assets/down.svg";
import up from "../assets/up.svg";

const Roles = ({ roles }) => {
  const { role, from, to, desc } = roles;
  const [collapse, setCollapse] = useState(true);

  const onCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <div className="ml-14 border-l-2 border-l-primary-dark-text m-4 p-2">
      <div
        className="flex justify-between items-center md:w-[15%] lg:w-[20%]"
        onClick={onCollapse}
      >
        <div>
          <h1 className="font-semibold text-[12px] lg:text-base">{role}</h1>
          <h3 className="font-medium text-[10px] md:text-xs text-primary-dark-text">
            {from} - {to}
          </h3>
        </div>
        <img
          src={collapse ? down : up}
          alt="dropdown"
          className="w-3 h-3 md:w-5 md:h-5"
        />
      </div>
      <div className={collapse ? "hidden" : "block"}>
        {desc.map((point, i) => (
          <h5 className="text-xs my-1" key={i}>
            - {point}
          </h5>
        ))}
      </div>
    </div>
  );
};

export default Roles;
