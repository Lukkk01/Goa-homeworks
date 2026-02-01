import { useState, useEffect } from "react";

function CounterAlert() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count === 7) {
      alert("Lucky number");
    }
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default CounterAlert;
