import React from "react";
import SocialIcons from "../common/socialIcons/SocialIcons";
import { GrFormNext } from "react-icons/gr";
import Link from "../common/link/Link";
// import Typed from "react-typed";

function Intro() {
  return (
    <div className="flex flex-col gap-5 font-poppins flex-1">
      <div className=" text-4xl ss:text-6xl font-semibold ">
        <p className="lg:tracking-wide">Hi There,</p>
      </div>
      <span className="text-3xl ss:text-5xl md:text-6xl font-semibold flex gap-4">
        <p className="lg:tracking-wide">I'm </p>
        <p className="text-primary-focus font-bold lg:tracking-wide text-gradient">
          Ansh Kumar
        </p>
      </span>
      <div className="text-xl ss:text-3xl font-semibold lg:tracking-wide flex flex-wrap gap-2 ">
        <span>I am into</span>
        <span>Web Development</span>
        {/* <Typed
          strings={[
            "Web Development ..... ",
            "Frontend Development .....",
            "Web design .....",
            "Sports Activities .....",
          ]}
          typeSpeed={30}
          backSpeed={40}
          attr="placeholder"
          loop
        >
          <input type="text" className="bg-transparent"/>
        </Typed> */}
      </div>
      <div className="flex">
        <Link
          text={"See Resume"}
          icon={<GrFormNext size={20} />}
          alt="Resume"
          url="https://drive.google.com/file/d/1aNCF6UFAjcPkxamZxghuT4OrrxWHdlxI/view?usp=drive_link"
        />
      </div>
      <div>
        <SocialIcons />
      </div>
    </div>
  );
}

export default Intro;
