import React from "react";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiChakraui, SiGit, SiTypescript } from "react-icons/si";
import {
  TbBrandFirebase,
  TbBrandJavascript,
  TbBrandNextjs,
} from "react-icons/tb";

const SkillCard = () => {
  return (
    <>
      {/* for html */}
      <div
        className="text-white flex flex-col items-center justify-center w-28 h-32 rounded-md font-semibold cursor-pointer transition-all ease-in-out duration-500 hover:-translate-y-2"
        style={{ boxShadow: "1px 1px 4px 4px #1aba95" }}
      >
        <FaHtml5 size={48} />
        <p>HTML</p>
      </div>

      {/* for css */}
      <div
        className="text-white flex flex-col items-center justify-center w-28 h-32 rounded-md font-semibold cursor-pointer transition-all ease-in-out duration-500 hover:-translate-y-2"
        style={{ boxShadow: "1px 1px 4px 4px #1aba95" }}
      >
        <FaCss3Alt size={48} />
        <p>CSS</p>
      </div>

      {/* for tailwind css */}
      <div
        className="text-white flex flex-col items-center justify-center w-28 h-32 rounded-md font-semibold cursor-pointer transition-all ease-in-out duration-500 hover:-translate-y-2"
        style={{ boxShadow: "1px 1px 4px 4px #1aba95" }}
      >
        <SiTailwindcss size={48} />
        <p>Tailwind CSS</p>
      </div>

      {/* for chakra ui */}
      <div
        className="text-white flex flex-col items-center justify-center w-28 h-32 rounded-md font-semibold cursor-pointer transition-all ease-in-out duration-500 hover:-translate-y-2"
        style={{ boxShadow: "1px 1px 4px 4px #1aba95" }}
      >
        <SiChakraui size={48} />
        <p>Chakra UI</p>
      </div>

      {/* for javascript */}
      <div
        className="text-white flex flex-col items-center justify-center w-28 h-32 rounded-md font-semibold cursor-pointer transition-all ease-in-out duration-500 hover:-translate-y-2"
        style={{ boxShadow: "1px 1px 4px 4px #1aba95" }}
      >
        <TbBrandJavascript size={48} />
        <p>JavaScript</p>
      </div>

      {/* for react */}
      <div
        className="text-white flex flex-col items-center justify-center w-28 h-32 rounded-md font-semibold cursor-pointer transition-all ease-in-out duration-500 hover:-translate-y-2"
        style={{ boxShadow: "1px 1px 4px 4px #1aba95" }}
      >
        <FaReact size={48} />
        <p>React JS</p>
      </div>

      {/* for next */}
      <div
        className="text-white flex flex-col items-center justify-center w-28 h-32 rounded-md font-semibold cursor-pointer transition-all ease-in-out duration-500 hover:-translate-y-2"
        style={{ boxShadow: "1px 1px 4px 4px #1aba95" }}
      >
        <TbBrandNextjs size={48} />
        <p>Next JS</p>
      </div>

      {/* for typescript */}
      <div
        className="text-white flex flex-col items-center justify-center w-28 h-32 rounded-md font-semibold cursor-pointer transition-all ease-in-out duration-500 hover:-translate-y-2"
        style={{ boxShadow: "1px 1px 4px 4px #1aba95" }}
      >
        <SiTypescript size={48} />
        <p>TypeScript JS</p>
      </div>

      {/* for firebase */}
      <div
        className="text-white flex flex-col items-center justify-center w-28 h-32 rounded-md font-semibold cursor-pointer transition-all ease-in-out duration-500 hover:-translate-y-2"
        style={{ boxShadow: "1px 1px 4px 4px #1aba95" }}
      >
        <TbBrandFirebase size={48} />
        <p>Firebase</p>
      </div>

      {/* for git */}
      <div
        className="text-white flex flex-col items-center justify-center w-28 h-32 rounded-md font-semibold cursor-pointer transition-all ease-in-out duration-500 hover:-translate-y-2"
        style={{ boxShadow: "1px 1px 4px 4px #1aba95" }}
      >
        <SiGit size={48} />
        <p>Git</p>
      </div>
    </>
  );
};

export default SkillCard;
