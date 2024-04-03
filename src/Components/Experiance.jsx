import React, { forwardRef, useRef, useState } from "react";
import Company from "./Company";
import { works } from "./utils/work";
import SmoothScroll from "./SmoothScroll";

const Experiance = () => {
  const [collapse, setCollapse] = useState(false);
  const [categoryitemindex, setcategoryitemindex] = useState(-10);

  const experianceComp = useRef();

  const menuOpen = (index) => {
    index == categoryitemindex
      ? setcategoryitemindex(-1)
      : setcategoryitemindex(index);
  };
  const onCollapse = () => {
    setCollapse((prev) => !prev);
  };

  const WrappedComponent = forwardRef(({ refforwarded }, ref) => {
    return (
      <div ref={refforwarded} id="experiance">
        <div id="abouttrigger">
          <div
            id="exp-comp"
            className=" relative flex flex-col items-center w-full lg:w-[80%] mx-auto lg:py-12  "
          >
            <h2 className="text-base lg:text-3xl font-bold font-hand tracking-wide 	">
              EXPERIANCE
            </h2>
            <div className="w-full ">
              {works.map((work, i) => {
                return (
                  <Company
                    key={i}
                    work={work}
                    menuOpen={menuOpen}
                    index={i}
                    collapse={collapse}
                    categoryitemindex={categoryitemindex}
                    onCollapse={onCollapse}
                    iscategorydropdownopen={
                      i === categoryitemindex ? true : false
                    }
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  });

  const EnhancedComponent = SmoothScroll(
    WrappedComponent,
    "experiance",
    "abouttrigger",
    "exp-comp",
    "top 70%",
    "bottom center",
    null
  );

  return <EnhancedComponent refforwarded={experianceComp} />;
};

export default Experiance;
