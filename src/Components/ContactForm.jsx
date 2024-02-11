import React from "react";
import profile from "../assets/profile.svg";

const ContactForm = () => {
  return (
    <div
      id="contact"
      className=" relative flex flex-col items-center  sm:w-[90%]  w-[80%] mx-auto lg:py-12 h-screen mt-5 md:mt-0 "
    >
      <h2 className="text-base lg:text-3xl font-bold font-hand tracking-wide 	">
        Contact Details
      </h2>
      <div className=" flex flex-col items-center md:flex-row">
        <div className="w-full lg:w-[30%] ">
          <img
            src={profile}
            alt="profile pic"
            className="h-20 md:h-96 md:object-fill my-2 mx-auto"
          />
        </div>
        <div className="w-full py-4 flex  lg:w-[50%]  flex-col justify-center lg:p-5">
          <h2 className="text-base my-2 lg:mx-auto font-hand lg:text-3xl font-semibold">
            Email At :
            <span className="text-base font-medium">
              kamathadithya12@gmail.com
            </span>
          </h2>
          <h2 className="text-base my-2 lg:mx-auto font-hand lg:text-3xl font-semibold flex flex-col justify-center items-center">
            Download Resume / CV
            <button
              title="resume-adithya-kamath"
              onClick={() => {
                window.open(
                  "https://portfolio-assts.s3.ap-south-1.amazonaws.com/resume.pdf",
                  "_blank"
                );
              }}
              className="text-base font-medium border border-primary-dark-text w-[30%]"
            >
              Resume
            </button>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
