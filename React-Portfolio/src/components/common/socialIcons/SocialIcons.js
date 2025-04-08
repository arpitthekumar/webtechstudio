import React from "react";
import {
  FaLinkedin,
  FaGithubSquare,
  FaTwitter,
  FaMailBulk,
} from "react-icons/fa";

const social = [
  {
    icon: <FaLinkedin className="hover:scale-110"/>,
    url: "https://www.linkedin.com/in/ansh-kumar-064b43198/",
  },
  { icon: <FaGithubSquare className="hover:scale-110"/>, url: "https://github.com/Anshkumar1611" },
  { icon: <FaTwitter className="hover:scale-110"/>, url: "https://twitter.com/home" },
  { icon: <FaMailBulk className="hover:scale-110"/>, url: "mailto:ansh2018gupta@gmail.com.au" },
];
function SocialIcons() {
  return (
    <div className="flex flex-row gap-3 py-2">
      {social.map((icons, index) => {
        return (
          <div
            className="w-12 h-12 rounded-full bg-gray-gradient flex justify-center items-center "
            key={index}
          >
            <a
              href={icons.url}
              target="_blank"
              rel="noreferrer"
              alt="social-media"
              className="text-xl cursor-pointer hover:text-dimWhite"
            >
              {icons.icon}
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default SocialIcons;
