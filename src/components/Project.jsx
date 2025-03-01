import React from "react";
function Project({ title, description }) {
    return (
      <div
        className="bg-gray-700 p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105"
      >
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    );
}

export default Project
  