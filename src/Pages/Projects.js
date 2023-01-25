import React from "react";
import StatCard from "../Components/StatCard";
import Layout from "../Layout/Layout";

const Projects = () => {
  const projectOverview = [
    {
      name: "HTML + CSS",
      number: 15,
    },
    {
      name: "Tailwind CSS",
      number: 5,
    },
    {
      name: "JavaScript",
      number: 16,
    },
    {
      name: "ReactJS",
      number: 5,
    },
    {
      name: "MERN",
      number: 2,
    },
  ];

  return (
    <Layout>
      <div className="ml-[15%]">
        <h1 className="text-center my-2 text-3xl text-white font-semibold">
          Projects Overview
        </h1>
        <p className="mb-10 mx-[15%] text-gray-200 text-center">
          Project overview data can be verified by visiting{" "}
          <a className="link link-success" href="">
            Github Profile
          </a>
        </p>
        {/* for displaying the projects stats */}
        <div className="flex items-center justify-center gap-10 flex-wrap">
          {projectOverview.map((element, index) => {
            return (
              <StatCard
                name={element.name}
                number={element.number}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
