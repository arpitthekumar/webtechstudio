import React from "react";

const InfoBoxes = () => {
  const infoBoxes = [
    {
      title: "Available Now",
      description:
        "How to use the new version of the admin dashboard? Takes 4 minutes to learn.",
      actionText: "Watch",
      actionClass: "btn-primary",
    },
    {
      title: "Coming Soon",
      description:
        "New server actions are available, partial pre-rendering is coming up! Boost your productivity.",
      actionText: "Learn",
      actionClass: "btn-secondary",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {infoBoxes.map((box, index) => (
        <div key={index} className="card bg-base-200 p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-bold">{box.title}</h3>
          <p className="text-sm text-gray-500 mb-4">{box.description}</p>
          <button className={`btn ${box.actionClass}`}>{box.actionText}</button>
        </div>
      ))}
    </div>
  );
};

export default InfoBoxes;
