import React from "react";

const StatCard = ({ name, number }) => {
  return (
    <div
      className="text-gray-200 flex flex-col items-center justify-center w-fit p-2 rounded-md font-semibold cursor-pointer transition-all ease-in-out duration-500 hover:-translate-y-1"
      style={{ boxShadow: "1px 1px 4px 4px #1aba95" }}
    >
      <h2 className="text-xl font-semibold font-mono">{name}</h2>
      <p className="text-2xl text-center font-mono text-[#64ffda]">{number}+</p>
    </div>
  );
};

export default StatCard;
