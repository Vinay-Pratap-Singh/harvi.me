import React, { useEffect } from "react";
import "./Bubble.css";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";

const Bubble = (props) => {
  useEffect(() => {
    const test = document.getElementById(props.name);
    // for preventing the stacking of skills
    const X = Math.floor(Math.random() * 70);
    const Y = Math.floor(Math.random() * 60);
    test.style.top = `${Y}vh`;
    test.style.left = `${X}vw`;

    // for animating the skills
    let id;
    id = setInterval(() => {
      const X = Math.floor(Math.random() * 70);
      const Y = Math.floor(Math.random() * 60);
      test.style.top = `${Y}vh`;
      test.style.left = `${X}vw`;
    }, Number(props.time));
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      {props.name === "FaHtml5" && (
        <FaHtml5 id={props.name} className="bubble" />
      )}
      {props.name === "FaCss3Alt" && (
        <FaCss3Alt id={props.name} className="bubble" />
      )}
      {props.name === "SiTailwindcss" && (
        <SiTailwindcss id={props.name} className="bubble" />
      )}
      {props.name === "TbBrandJavascript" && (
        <TbBrandJavascript id={props.name} className="bubble" />
      )}
      {props.name === "FaReact" && (
        <FaReact id={props.name} className="bubble" />
      )}
      {props.name === "FaNodeJs" && (
        <FaNodeJs id={props.name} className="bubble" />
      )}
      {props.name === "SiExpress" && (
        <SiExpress id={props.name} className="bubble" />
      )}
      {props.name === "SiMongodb" && (
        <SiMongodb id={props.name} className="bubble" />
      )}
    </div>
  );
};

export default Bubble;
