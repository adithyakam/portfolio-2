import gsap from "gsap"; // <-- import GSAP
import { useGSAP } from "@gsap/react";

export const gsapApp = gsap.registerPlugin(useGSAP);
export const tl = gsap.timeline();

export default gsap;
