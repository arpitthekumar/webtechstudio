import React from "react";
import EducationCard from "../common/cards/EducationCard";
import Header from "../common/header/Header";

function Education() {
  return (
    <div id="education" className="lg:min-h-screen py-8">
      <Header title="My Education" />

      <div className="px-12 lg:px-64 py-8 relative">
        <EducationCard />
        <div className="absolute z-[3] -left-1/2 rounded-full w-[50%] h-[50%] top-0 white__gradient" />
        <div className="absolute z-[0] -left-1/2 rounded-full w-[50%] h-[50%] bottom-0 pink__gradient" />
      </div>
    </div>
  );
}

export default Education;
