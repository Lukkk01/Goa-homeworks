import { useState } from "react";

// CounterView - მხოლოდ View
function CounterView({ count, increment }) {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increase</button>
    </div>
  );
}

// CounterContainer - State + Logic
function CounterContainer() {
  const [count, setCount] = useState(0);

  // ფუნქცია რიცხვის გასაზრდელად
  const increment = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div>
      <h2>Counter Example</h2>
      {/* state და ფუნქცია props-ით გადაეცემა */}
      <CounterView count={count} increment={increment} />
    </div>
  );
}

export default CounterContainer;
