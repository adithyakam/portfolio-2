import React, { useState } from "react";
import Roles from "./Roles";
import CmpanyLogo from "../assets/company.svg";

const Company = ({
  work,
  menuOpen,
  index,
  collapse,
  onCollapse,
  categoryitemindex,
  iscategorydropdownopen,
}) => {
  const { roles, company } = work;
  return (
    <div className="my-4 p-2 relative mx-auto w-full md:w-1/2 ">
      <div
        className="flex items-center bg-primary-green rounded-md p-2 justify-between "
        onClick={() => menuOpen(index)}
      >
        <h1 className="text-sm md:text-base font-bold ml-4 text-primary-bg ">
          {company}
        </h1>
        <h1 className="text-sm md:text-base font-bold ml-4   text-primary-bg">
          {!iscategorydropdownopen ? "+" : "-"}
        </h1>
      </div>
      <div className={`${!iscategorydropdownopen ? "hidden" : "block"}`}>
        {roles?.map((role, i) => (
          <Roles
            roles={role}
            key={role.role}
            collapse={collapse}
            menuOpen={menuOpen}
            index={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Company;
