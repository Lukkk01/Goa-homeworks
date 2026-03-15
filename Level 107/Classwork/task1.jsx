import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  const [double, setDouble] = useState(0);

  const slowFunction = (num) => {
    console.log("Slow function started...");
    for (let i = 0; i < 10000000; i++) {
    }
    console.log("Slow function finished.");
    return num * 2;
  };

  const getDouble = () => {
    const result = slowFunction(number);
    setDouble(result);
  };

  return (
    <div>
      <h2>States Example</h2>

      <p>Count მნიშვნელობა: {count}</p>
      <p>Number მნიშვნელობა: {number}</p>
      <p>Double მნიშვნელობა: {double}</p>

      <button onClick={() => setCount(count + 1)}>
        გაზარდე Count
      </button>

      <button onClick={() => setNumber(number + 1)}>
        გაზარდე Number
      </button>

      <button onClick={getDouble}>
        გამოთვალე Double (ნელი ფუნქციით)
      </button>
    </div>
  );
}

export default App;