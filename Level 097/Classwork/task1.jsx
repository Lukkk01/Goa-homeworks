import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [sum, setSum] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = Number(num1) + Number(num2);
    setSum(result);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="num 1"
        />

        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="num 2"
        />

        <button type="submit">=</button>
      </form>

      <p>Sum: {sum}</p>
    </div>
  );
}

export default Calculator;
