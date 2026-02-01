import React from "react";

function TailwindView({ text }) {
  return (
    <div className="bg-blue-500 p-6 m-4 rounded-lg shadow-md text-white text-center">
      <h2 className="text-2xl font-bold mb-2">Tailwind Card</h2>
      <p>{text}</p>
    </div>
  );
}

export default TailwindView;
