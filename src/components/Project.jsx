import React from "react";
function Project({ title, description }) {
    return (
      <div
        className="bg-dark2 p-24 rounded-xl shadow-lg transform transition-transform hover:scale-105"
      >
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray">{description}</p>
      </div>
    );
}

export default Project
  