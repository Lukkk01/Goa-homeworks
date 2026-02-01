import { useState } from "react";

function Fruits() {
  const [fruits, setFruits] = useState([]);

  const addOrange = () => {
    setFruits([...fruits, "orange"]);
  };

  const clearFruits = () => {
    setFruits([]);
  };

  return (
    <div>
      <h2>Fruits:</h2>

      <p>{fruits.length === 0 ? "No fruits" : fruits.join(", ")}</p>

      <button onClick={addOrange}>Add Orange</button>
      <button onClick={clearFruits} style={{ marginLeft: "10px" }}>
        Clear
      </button>
    </div>
  );
}

export default Fruits;
