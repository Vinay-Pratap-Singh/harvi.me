import React from "react";
import { NavLink } from "react-router-dom";
import Layout from "../Layout/Layout";
import userImage from "../Assets/userImage.jpeg";

const About = () => {
  return (
    <Layout>
      <div className="sm:mx-[15%] sm:h-[85vh] flex flex-col-reverse sm:flex-row items-center justify-center sm:space-x-10 text-gray-100">
        {/* for introduction */}
        <div className="sm:w-2/3 mx-6 sm:mx-0">
          Hello! My name is{" "}
          <span className="text-[#64ffda]">Vinay Pratap Singh</span>, and I am a
          frontend developer with a passion for creating engaging and innovative
          user experiences. I specialize in frontend technologies such as{" "}
          <span className="text-[#64ffda]">React, Next.js, and TypeScript</span>
          , and I am constantly exploring new ways to improve my skills and stay
          up-to-date with the latest industry trends. <br /> Over the course of
          my career, I have worked on a wide range of projects, from small-scale
          applications to large, complex systems. Regardless of the size or
          scope of the project, my goal is always the same: to create
          high-quality, well-designed solutions that meet the needs of both
          clients and end-users.
          {/* adding the buttons */}
          <div className="mt-6 space-x-6 mb-[5rem] sm:mb-0">
            <NavLink to="/contact">
              <button className="border-2 border-[#1aba95] bg-[#1aba95] px-5 py-2 rounded-md font-semibold">
                Connect with me
              </button>
            </NavLink>
            <NavLink to="/skills">
              <button className="border-2 border-[#1aba95] px-5 py-2 rounded-md font-semibold">
                Skills
              </button>
            </NavLink>
          </div>
        </div>

        {/* for image */}
        <div className="sm:w-1/3 my-4 sm:my-0 h-[22rem] border-2 border-[#64ffda] cursor-pointer rounded-md">
          <img
            className="object-cover w-full h-full p-2 hover:transition-all hover:p-0 rounded-md"
            src={userImage}
            alt="image"
          />
        </div>
      </div>
    </Layout>
  );
};

export default About;
