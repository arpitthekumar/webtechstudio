import React from "react";

function Rectangular({ title, icon }) {
  return (
    <button type="submit" className="bg-blue-gradient flex gap-2 justify-center items-center text-base-100 hover:text-primary py-2 px-4 font-semibold rounded drop-shadow-2xl group">
      <span>{title}</span>
      <span className="group-hover:scale-125 group-hover:translate-x-1 duration-300">{icon}</span>
    </button>
  );
}

export default Rectangular;
