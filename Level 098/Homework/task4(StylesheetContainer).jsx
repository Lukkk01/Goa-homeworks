import React, { useState } from "react";
import StylesheetView from "./StylesheetView";

function StylesheetContainer() {
  const [title, setTitle] = useState("Hello, World!");

  const handleClick = () => {
    setTitle("Button Clicked!");
  };

  return (
    <div>
      <h2>Stylesheet Example</h2>
      {/* Container-ში მხოლოდ მონაცემები და ლოგიკა */}
      <StylesheetView title={title} onButtonClick={handleClick} />
    </div>
  );
}

export default StylesheetContainer;
