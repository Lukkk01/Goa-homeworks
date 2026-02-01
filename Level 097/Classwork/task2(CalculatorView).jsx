function CalculatorView({
  firstNumber,
  secondNumber,
  sum,
  onFirstNumberChange,
  onSecondNumberChange,
  onSubmit,
}) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="number"
          value={firstNumber}
          onChange={(e) =>
            onFirstNumberChange(e.target.value)
          }
        />

        <input
          type="number"
          value={secondNumber}
          onChange={(e) =>
            onSecondNumberChange(e.target.value)
          }
        />

        <button type="submit">დაჯამება</button>
      </form>

      <p>Sum: {sum}</p>
    </div>
  );
}

export default CalculatorView;
