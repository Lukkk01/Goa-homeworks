import React from "react";

export const Test = ({ shouldThrow, name }) => {
  if (shouldThrow) {
    throw new Error(` Error from component: ${name}`);
  }

  return (
    <div style={{ padding: "10px", background: "#f2f2f2", margin: "5px" }}>
       Component {name} rendered successfully
    </div>
  );
};