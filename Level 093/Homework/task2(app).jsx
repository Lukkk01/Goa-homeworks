import { useState } from "react";
import Input from "./Input";

function App() {
  // state ტექსტისთვის
  const [text, setText] = useState("");

  // input-ის ცვლილების ფუნქცია
  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <Input
        value={text}
        onChange={handleChange}
      />

      <p>Text: {text}</p>
    </div>
  );
}

export default App;
