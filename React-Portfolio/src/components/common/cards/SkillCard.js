import React from "react";
import { FaGitAlt, FaReact, FaCss3, FaBootstrap } from "react-icons/fa";
import {
  SiHeroku,
  SiFramer,
  SiNetlify,
  SiVisualstudiocode,
  SiPython,
  SiC,
  SiJavascript,
  SiJquery,
  SiMaterialui,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import Tilt from "react-parallax-tilt";

const skills = [
  // Frontend
  { logo: <AiFillHtml5 size={45} />, title: "HTML 5" },
  { logo: <FaCss3 size={45} />, title: "CSS" },
  { logo: <SiJavascript size={45} />, title: "Javascript" },
  { logo: <FaBootstrap size={45} />, title: "Bootstrap" },
  { logo: <SiTailwindcss size={45} />, title: "Tailwind CSS" },
  { logo: <SiJquery size={45} />, title: "JQuery" },
  { logo: <FaReact size={45} />, title: "React" },
  { logo: <SiMaterialui size={45} />, title: "Material UI" },
  { logo: <SiFramer size={45} />, title: "Framer Motion" },
  // Backend
  { logo: <SiNodedotjs size={45} />, title: "Node JS" },
  { logo: <SiExpress size={45} />, title: "Express JS" },
  { logo: <SiFirebase size={45} />, title: "Firebase" },
  // Languages
  { logo: <SiC size={45} />, title: "C Language" },
  { logo: <SiPython size={45} />, title: "Python" },
  // Tools
  { logo: <FaGitAlt size={45} />, title: "Git" },
  { logo: <BsGithub size={45} />, title: "GitHub" },
  { logo: <SiVisualstudiocode size={45} />, title: "VS Code" },
  { logo: <SiNetlify size={45} />, title: "Netlify" },
  { logo: <SiHeroku size={45} />, title: "Heroku" },
];

function SkillCard() {
  return (
    <div className=" lg:px-44 pb-14 pt-8 flex-1 justify-center flex flex-wrap gap-x-4 gap-y-6 ">
      {skills.map((skill, index) => {
        return (
          <Tilt key={index}>
            <div className="w-52 h-36 p-4 rounded-lg flex flex-col gap-3 items-center justify-center hover:-translate-y-2 feature-card cursor-pointer hover:text-secondary">
              <span className=" rounded-lg ">{skill.logo}</span>
              <p className="font-playflair hover:rounded-xl text-sm text-dimWhite">
                {skill.title}
              </p>
            </div>
          </Tilt>
        );
      })}
    </div>
  );
}

export default SkillCard;
