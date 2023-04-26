import React, { useEffect } from "react";
import "./Bubble.css";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiChakraui, SiGit, SiTypescript } from "react-icons/si";
import {
  TbBrandFirebase,
  TbBrandJavascript,
  TbBrandNextjs,
} from "react-icons/tb";

const Bubble = (props) => {
  useEffect(() => {
    const test = document.getElementById(props.name);
    // for preventing the stacking of skills
    const X = Math.floor(Math.random() * 90);
    const Y = Math.floor(Math.random() * 85);
    test.style.top = `${Y}%`;
    test.style.left = `${X}%`;

    // for animating the skills
    let id;
    id = setInterval(() => {
      const X = Math.floor(Math.random() * 85);
      const Y = Math.floor(Math.random() * 85);
      test.style.top = `${Y}%`;
      test.style.left = `${X}%`;
    }, Number(props.time));
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      {/* for html */}
      {props.name === "FaHtml5" && (
        <FaHtml5 id={props.name} className="bubble" />
      )}

      {/* for css */}
      {props.name === "FaCss3Alt" && (
        <FaCss3Alt id={props.name} className="bubble" />
      )}

      {/* for tailwind css */}
      {props.name === "SiTailwindcss" && (
        <SiTailwindcss id={props.name} className="bubble" />
      )}

      {/* for chakra ui */}
      {props.name === "SiChakraui" && (
        <SiChakraui id={props.name} className="bubble" />
      )}

      {/* for javascript */}
      {props.name === "TbBrandJavascript" && (
        <TbBrandJavascript id={props.name} className="bubble" />
      )}

      {/* for react */}
      {props.name === "FaReact" && (
        <FaReact id={props.name} className="bubble" />
      )}

      {/* for next */}
      {props.name === "TbBrandNextjs" && (
        <TbBrandNextjs id={props.name} className="bubble" />
      )}

      {/* for typescript */}
      {props.name === "SiTypescript" && (
        <SiTypescript id={props.name} className="bubble" />
      )}

      {/* for firebase */}
      {props.name === "TbBrandFirebase" && (
        <TbBrandFirebase id={props.name} className="bubble" />
      )}

      {/* for git */}
      {props.name === "SiGit" && <SiGit id={props.name} className="bubble" />}
    </div>
  );
};

export default Bubble;
