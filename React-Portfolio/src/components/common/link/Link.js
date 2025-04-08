import React from "react";

function Link({ url, alt, text, icon }) {
  return (
    <a
      href={url}
      alt={alt}
      target="_blank"
      rel="noreferrer"
      className="bg-blue-gradient flex gap-1 justify-center items-center text-base-100 hover:text-primary py-2 px-4 font-semibold rounded drop-shadow-2xl group"
    >
      <span>{text}</span>
      <span className="group-hover:scale-125 group-hover:translate-x-1 duration-300 flex items-center">{icon}</span>
    </a>
  );
}

export default Link;
