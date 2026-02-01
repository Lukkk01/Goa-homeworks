import { useState } from "react";

// ToggleView - მხოლოდ View
function ToggleView({ isOn, toggle }) {
  return (
    <div>
      <p>{isOn ? "ON" : "OFF"}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

// ToggleContainer - State + Logic
function ToggleContainer() {
  const [isOn, setIsOn] = useState(false);

  // ფუნქცია boolean-ის გადაცვლისთვის
  const toggle = () => {
    setIsOn(prev => !prev);
  };

  return (
    <div>
      <h2>Toggle Example</h2>
      {/* state და ფუნქცია props-ით გადაეცემა View-ს */}
      <ToggleView isOn={isOn} toggle={toggle} />
    </div>
  );
}

export default ToggleContainer;
