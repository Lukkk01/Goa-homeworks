import React, { useState, useMemo } from "react";

const Message = React.memo(({ text }) => {
  console.log("Rendering Message:", text);
  return <p>Message: {text}</p>;
});

export default function CounterWithMemo() {
  const [count, setCount] = useState(1);
  const [message, setMessage] = useState("Hello!");

  const calculateFactorial = (number) => {
    console.log("Calculating factorial for", number);
    let result = 1;
    for (let i = 2; i <= number; i++) {
      result *= i;
    }
    return result;
  };

  const factorial = useMemo(() => calculateFactorial(count), [count]);

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>Counter With Memo</h2>

      <p>Counter: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increase</button>

      <p>Factorial: {factorial}</p>

      <hr />

      <Message text={message} />
      <button onClick={() => setMessage("Hi there!")}>Change Message</button>
    </div>
  );
}
