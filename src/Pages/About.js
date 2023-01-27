import React from "react";
import { NavLink } from "react-router-dom";
import Layout from "../Layout/Layout";
import userImage from "../Assets/userImage.jpeg";

const About = () => {
  return (
    <Layout>
      <div className="sm:mx-[15%] sm:h-[85vh] flex flex-col-reverse items-center justify-center sm:space-x-10 text-gray-100">
        {/* for introduction */}
        <div className="sm:w-2/3 mx-6 sm:mx-0">
          Hello! I am Vinay Pratap Singh, a passionate software engineer.
          Currently working and exploring more on{" "}
          <span className="text-[#64ffda]">Full Stack Web Development</span> in
          which I am more focused toward the{" "}
          <span className="text-[#64ffda]">Frontend Part</span>. <br />
          My core skills are mostly based on{" "}
          <span className="text-[#64ffda]">JavaScript</span>, which is the love
          of my programming life. <br />
          I am also looking forward to collaborate with like minded people on
          projects to build some real-world problem solving tools. Also trying
          to contribute more in open source to serve the community by my
          knowledge and experience. <br /> <br />I am also open to work for any{" "}
          <span className="text-[#64ffda]">Freelancing Project</span> based on
          my skill set{" "}
          <span role="img" aria-label="smile">
            😊
          </span>
          .{/* adding the buttons */}
          <div className="mt-6 space-x-6 mb-[5rem]">
            <NavLink to="/contact">
              <button className="border-2 border-[#1aba95] bg-[#1aba95] px-5 py-2 rounded-md font-semibold">
                Hire Me
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
