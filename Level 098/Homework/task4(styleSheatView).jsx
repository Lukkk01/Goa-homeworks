import React from "react";
import "./styles.css"; // ჩვეულებრივი CSS ფაილის იმპორტი

function StylesheetView({ title, onButtonClick }) {
  return (
    <div className="container">
      <h2 className="title">{title}</h2>
      <button className="button" onClick={onButtonClick}>
        Click Me
      </button>
    </div>
  );
}

export default StylesheetView;
