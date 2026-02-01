import { useState } from "react";

// FormView - მხოლოდ View
function FormView({ value, handleChange, handleSubmit }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Type something..."
      />
      <button type="submit">Submit</button>
    </form>
  );
}

// FormContainer - State + Logic
function FormContainer() {
  const [inputValue, setInputValue] = useState("");

  // ცვლილების გადაცემის ფუნქცია
  const handleChange = (newValue) => {
    setInputValue(newValue);
  };

  // submit ფუნქცია
  const handleSubmit = () => {
    console.log("Submitted value:", inputValue);
    setInputValue(""); // choice: დასუფთავება submit-ის შემდეგ
  };

  return (
    <div>
      <h2>Form Example</h2>
      <FormView
        value={inputValue}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default FormContainer;
