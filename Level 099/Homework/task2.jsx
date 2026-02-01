import { useState } from "react";
import PasswordCheck from "./PasswordCheck";

function App() {
  const [password, setPassword] = useState("");

  return (
    <div>
      <h2>Controlled Password Example</h2>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <PasswordCheck password={password} />
    </div>
  );
}

export default App;
