import React from "react";
import Layout from "../Layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <div id="homepage" className=" text-white h-[85vh] ml-[15%]">
        {/* wrapper for content */}
        <div className="h-full flex flex-col justify-center">
          {/* introduction */}
          <p className="text-[#64ffda] font-mono text-lg">Hello! I am</p>
          <h1 className="text-6xl font-bold py-4">Vinay Pratap Singh</h1>
          <p className="text-[#64ffda] text-3xl font-bold">
            Full Stack Developer
          </p>

          <ul className="mt-2 ml-4 flex items-center space-x-10 list-disc">
            <li>Web Developer</li>
            <li>Programmer</li>
            <li>Software Engineer</li>
          </ul>

          {/* creating the button */}
          <div className="mt-6 space-x-10">
            <button className="border-2 border-[#1aba95] bg-[#1aba95] px-5 py-3 rounded-md font-semibold">
              Get Resume
            </button>
            <button className="border-2 border-[#1aba95] px-5 py-3 rounded-md font-semibold">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
