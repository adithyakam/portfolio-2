import React, { forwardRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = (
  Component,
  componentId,
  triggerId,
  animationId,
  start,
  end,
  scrub
) => {
  return forwardRef((props, ref) => {
    // console.log(
    //   Component,
    //   componentId,
    //   triggerId,
    //   animationId,
    //   start,
    //   end,
    //   scrub,
    //   props.refforwarded,
    //   "dadf",
    //   ref
    // );
    useGSAP(
      () => {
        gsap.from(`#${componentId}`, {
          y: -500,
          stagger: 0.04,
        });

        gsap.from(`#${animationId}`, {
          duration: 0.5,
          opacity: 0,
          // y: 100,
          scrollTrigger: {
            trigger: `#${triggerId}`,
            start: start,
            end: end,
            scrub: true,
            markers: false,
            ease: "sine.in",
            opacity: 1,
          },
        });
      },
      {
        scope: props.refforwarded,
      }
    );
    return <Component forwardRef={ref} {...props} />;
  });
};

export default SmoothScroll;
