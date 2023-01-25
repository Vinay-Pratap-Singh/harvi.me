import React, { useState } from "react";
import Bubble from "../Components/Bubble/Bubble";
import Layout from "../Layout/Layout";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import SkillCard from "../Components/SkillCard";

const Skills = () => {
  const [view, setView] = useState(true);

  return (
    <Layout>
      {/* button for toggling the normal and animation view of page */}
      {view && (
        <button
          className="border-2 border-[#1aba95] bg-[#1aba95] hover:bg-[#41e2bd] transition-all ease-in-out duration-300 p-2 rounded-full font-semibold text-white absolute right-10 top-28 z-50 tooltip tooltip-top"
          data-tip="Switch View"
          onClick={() => {
            setView(!view);
          }}
        >
          <AiFillEye className="bg-transparent" fontSize={"20px"} />
        </button>
      )}

      {!view && (
        <button
          className="border-2 border-[#1aba95] bg-[#1aba95] hover:bg-[#41e2bd] transition-all ease-in-out duration-300 p-2 rounded-full font-semibold text-white absolute right-10 top-28 z-50 tooltip tooltip-top"
          data-tip="Switch View"
          onClick={() => {
            setView(!view);
          }}
        >
          <AiFillEyeInvisible className="bg-transparent" fontSize={"20px"} />
        </button>
      )}

      {/* for displaying the bubbles and cards */}
      {view ? (
        <div className="h-[75vh] ml-[15%] pt-10 relative">
          <Bubble name="FaHtml5" time="3100" />
          <Bubble name="FaCss3Alt" time="3300" />
          <Bubble name="SiTailwindcss" time="3500" />
          <Bubble name="TbBrandJavascript" time="3700" />
          <Bubble name="FaReact" time="3900" />
          <Bubble name="FaNode" time="4100" />
          <Bubble name="SiExpress" time="4300" />
          <Bubble name="SiMongodb" time="4500" />
          <Bubble name="SiChakraui" time="4700" />
          <Bubble name="SiGit" time="4900" />
        </div>
      ) : (
        <div className="h-[75vh] flex items-center justify-center">
          <div className="grid grid-cols-5 gap-10 w-fit">{<SkillCard />}</div>
        </div>
      )}
    </Layout>
  );
};

export default Skills;
