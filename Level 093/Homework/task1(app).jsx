import { useState } from "react";
import Button from "./Button";

function App() {
  // state — count და მისი შეცვლის ფუნქცია
  const [count, setCount] = useState(0);

  // ფუნქცია, რომელიც ზრდის count-ს
  function increaseCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>

      <Button
        label="Increase"
        onClick={increaseCount}
      />
    </div>
  );
}

export default App;
