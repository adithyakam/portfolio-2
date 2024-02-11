import React, { useState } from "react";
import Roles from "./Roles";
import CmpanyLogo from "../assets/company.svg";
const Company = ({ work }) => {
  const { roles, company } = work;

  return (
    <div className="my-4 p-2 relative mx-auto w-full md:ml-[10%] md:w-screen">
      <div className="border-l-2 border-l-primary-dark-text absolute top-14 bottom-2 left-6"></div>
      <div className="flex items-center">
        <img src={CmpanyLogo} alt="company" className="w-10 h-10" />
        <h1 className="font-semibold ml-4">{company}</h1>
      </div>
      <div>
        {roles?.map((role) => (
          <Roles roles={role} key={role.role} />
        ))}
      </div>
    </div>
  );
};

export default Company;
