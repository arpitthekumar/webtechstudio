import React from "react";
import Header from "../common/header/Header";
import { about } from "../../assets/svg";
import Tilt from "react-parallax-tilt";

function About() {
  return (
    <div
      id="about"
      className="lg:px-32 px-8 pt-4 lg:h-[42rem] flex flex-col justify-center items-center relative overflow-hidden"
    >
      <div className="absolute z-[0] -right-[50%] top-[20%] rounded-full w-[60%] h-[50%] blue__gradient" />
      <Header title="About Me" />

      <div className="flex flex-col items-center sm:flex-row pt-8 overflow-hidden sm:gap-16">
        <div className="flex md:justify-center items-center md:basis-1/3 ">
          <Tilt>
            <div className="w-full md:w-96 h-[27rem] p-4 ">
              <img
                src={about}
                alt="Profile"
                className="rounded-lg w-full h-full flex-1 relative z-[5]"
              />
            </div>
          </Tilt>
        </div>
        <div className="md:basis-2/3 p-4 flex flex-col gap-4 justify-center md:text-justify flex-1 overflow-hidden">
          <div className="">
            <p className="text-4xl font-semibild ">I'm Ansh</p>
            <p className="text-xl text-gradient font-semibold">
              Frontend Developer
            </p>
          </div>

          <p className="text-justify text-dimWhite">
            I am a Frontend developer based in Gurugram, India. I am an
            Information Technology graduate from Dayalbagh Educational
            Institute. I am very passionate about improving my coding skills &
            developing applications & websites. I build WebApps and Websites
            using Javascript and its library like React js. Working for myself
            to improve my skills. Love to build Websites.
          </p>
          <div className="flex flex-col gap-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between ">
              <div className="flex gap-1 sm:w-1/2">
                <p className="text-gradient font-semibold">Age :</p>
                <p className="text-semibold ">22</p>
              </div>
              <div className="flex gap-1 sm:w-1/2">
                <p className="text-gradient font-semibold">Email :</p>
                <p className="text-semibold ">ansh2018gupta@gmail.com</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between ">
              <div className="flex gap-1 sm:w-1/2">
                <p className="text-gradient font-semibold">Phone :</p>
                <p className="text-semibold ">+91 639-670-4951</p>
              </div>
              <div className="flex gap-1 sm:w-1/2">
                <p className="text-gradient font-semibold">Place :</p>
                <p className="text-semibold ">Agra, India - 282006</p>
              </div>
            </div>
          </div>
          <div className="h-4 bg-blue-gradient font-semibold " />
        </div>
      </div>
    </div>
  );
}

export default About;
