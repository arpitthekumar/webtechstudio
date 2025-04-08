import React from "react";
import ProjectCard from "../common/cards/ProjectCard";
import Header from "../common/header/Header";
import Link from "../common/link/Link";

function Project() {
  return (
    <div id="project" className="lg:min-h-screen py-8">
      <Header title="My Projects" />
      <div className="px-8 lg:px-36 py-8 flex justify-center">
        <ProjectCard />
      </div>
      <div className="flex flex-row gap-4 justify-center items-center pt-10">
        <div className="basis-1/4 sm:basis-1/3 h-1 w-full bg-black-gradient-2"></div>
        <Link
          text="More Projects"
          url="https://github.com/Anshkumar1611"
          alt="More Projects"
        />
        <div className="basis-1/4 sm:basis-1/3 h-1 w-full bg-black-gradient"></div>
      </div>
    </div>
  );
}

export default Project;
