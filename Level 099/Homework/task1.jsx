import { useState, useRef } from "react";

function App() {
  const [password, setPassword] = useState("");

  const usernameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    alert(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input type="text" ref={usernameRef} placeholder="Enter username" />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
