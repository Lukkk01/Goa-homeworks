import React, { useState, useMemo } from "react";

function ExpensiveCalculator() {
  const [counter, setCounter] = useState(0);
  const [inputNumber, setInputNumber] = useState(1);
  const [result, setResult] = useState(0);

  function expensiveCalculation(num) {
    console.log("Running expensive calculation for", num);
    for (let i = 0; i < 100_000_000; i++) {} 
    return num * num;
  }

  const cachedValue = useMemo(() => expensiveCalculation(inputNumber), [inputNumber]);

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>Expensive Calculator</h2>

      <p>Counter value: {counter}</p>
      <button onClick={() => setCounter((c) => c + 1)}>Increase Counter</button>

      <hr />

      <label>
        Input number:{" "}
        <input
          type="number"
          value={inputNumber}
          onChange={(e) => setInputNumber(Number(e.target.value))}
        />
      </label>

      <p>Cached calculated value: {cachedValue}</p>

      <button onClick={() => setResult(cachedValue)}>Calculate</button>

      <p>Final result: {result}</p>
    </div>
  );
}

export default ExpensiveCalculator;