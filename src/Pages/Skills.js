import React from "react";
import Bubble from "../Components/Bubble/Bubble";
import Layout from "../Layout/Layout";

const Skills = () => {
  return (
    <Layout>
      <div className="h-[85vh] ml-[15%] pt-10 relative">
        <Bubble name="FaHtml5" time="4000" />
        <Bubble name="FaCss3Alt" time="4200"/>
        <Bubble name="SiTailwindcss" time="4800"/>
        <Bubble name="TbBrandJavascript" time="4200"/>
        <Bubble name="FaReact" time="4500"/>
        <Bubble name="FaNodeJs" time="4000"/>
        <Bubble name="SiExpress" time="4400"/>
        <Bubble name="SiMongodb" time="4700"/>
      </div>
    </Layout>
  );
};

export default Skills;
