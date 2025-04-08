import React from "react";
import Images from "../../assets/images";
import Intro from "./Intro";
import Tilt from "react-parallax-tilt";

function Hero() {
  return (
    <div
      id="hero"
      className="ss:flex ss:flex-col  sm:flex-row px-8 lg:px-36 py-4 lg:h-[42rem]"
    >
      <div className="basis-1/2 flex items-center ">
        <Intro />
      </div>
      <div className="basis-1/2 flex items-center pt-14 sm:pt-4">
        <Tilt>
          <div className="flex-1 relative">
            <img
              src={Images.hero}
              alt={Images.hero}
              className=" relative z-5 w-full h-full"
            />
            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
            <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 rounded-full" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          </div>
        </Tilt>
      </div>
    </div>
  );
}

export default Hero;
