import React from "react";

const SkillBubble = ({ name, top, left }) => {
  return (
    <div
      //   style={{ top: `${top}%`, left: `${left}%` }}
      className={` text-xs  m-2  z-10 font-semibold border-b-primary-dark-text border shadow-2xl opacity-85 shadow-primary-dark-text w-14 h-14 lg:text-sm lg:w-20 lg:h-20 rounded-full flex justify-center items-center`}
    >
      {name}
    </div>
  );
};

export default SkillBubble;
