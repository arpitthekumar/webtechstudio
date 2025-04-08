import React from "react";

// const title = "Get In Touch";

function Header({ title }) {
  const colors = ["text-secondary", "text-white"];
  const splitTitle = title.split(" ");
  const firstColorIndex = Math.random() > 0.5 ? 0 : 1;
  const secondColorIndex = firstColorIndex ? 0 : 1;

  const mid = splitTitle.length / 2;

  return (
    <div className="flex flex-col items-center py-4">
      <p className="font-akronim text-5xl flex gap-2 justify-center py-4">
        {splitTitle.map((text, index) => {
          return (
            <span
              key={index}
              className={
                index < mid ? colors[firstColorIndex] : colors[secondColorIndex]
              }
            >
              {text}
            </span>
          );
        })}
      </p>
    </div>
  );
}

export default Header;
