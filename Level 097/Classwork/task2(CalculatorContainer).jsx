import { useState } from "react";
import CalculatorView from "./CalculatorView";

function CalculatorContainer() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [sum, setSum] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    const result =
      Number(firstNumber) + Number(secondNumber);

    setSum(result);
  };

  return (
    <CalculatorView
      firstNumber={firstNumber}
      secondNumber={secondNumber}
      sum={sum}
      onFirstNumberChange={setFirstNumber}
      onSecondNumberChange={setSecondNumber}
      onSubmit={handleSubmit}
    />
  );
}

export default CalculatorContainer;
