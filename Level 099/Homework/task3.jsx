import { useState, useRef, useEffect } from "react";

function LoginForm() {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const usernameRef = useRef();

  useEffect(() => {
    if (password.length > 0 && password.length < 8) {
      setPasswordError("Password must contain at least 8 characters");
    } else {
      setPasswordError("");
    }
  }, [password]); 

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
          {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
