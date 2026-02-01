import { useState, useEffect } from "react";

function BackgroundColor() {
  const [color, setColor] = useState("white");
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div>
      <h2>Background Color Changer</h2>

      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("green")}>Green</button>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("pink")}>pink</button>

      <p>Current color: {color}</p>
    </div>
  );
}

export default BackgroundColor;
