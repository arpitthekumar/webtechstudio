import React from "react";
import { school, college } from "../../../assets/svg";

const details = [
  {
    profile: college,
    course: "Bachelor Of Engineering In Information Technology",
    college: "Dayalbagh Educational Institute",
    place: "AGRA",
    year: "2018-2022",
    status: "Completed",
  },
  {
    profile: school,
    course: "Intermediate & High School in Science Stream",
    college: "New St. Stephen's Public School",
    place: "AGRA",
    year: "2016-2018",
    status: "Completed",
  },
];

function EducationCard() {
  return (
    <div className="flex flex-col gap-14 justify-center items-center">
      {details.map((detail, index) => {
        return (
          <div
            className="flex flex-col sm:flex-row gap-2 lg:gap-8 rounded-xl  max-w-4xl w-full bg-black-gradient"
            key={index}
          >
            <div className="flex h-52 relative justify-center items-center sm:basis-1/3 ">
              <img
                src={detail.profile}
                alt="college"
                className=" object-contain w-[1000%] h-[80%] sm:rounded-l-xl rounded-t-xl sm:rounded-tr-none"
              />
            </div>
            <div className="flex flex-col gap-3 py-4 lg:py-8 px-4 lg:px-0 sm:basis-2/3 ">
              <p className="text-xl sm:font-bold sm:text-2xl text-secondary">
                {detail.course}
              </p>
              <p className=" sm:font-semibold ">
                {detail.college} | {detail.place}
              </p>
              <p>
                {detail.year} | {detail.status}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default EducationCard;
