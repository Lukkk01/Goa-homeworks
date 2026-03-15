import React, { useState, useEffect } from "react";
import useForm from "./useForm";

function Login() {
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // დააწესე ინიციალიზაცია localStorage-დან
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (savedUser) {
      setIsLoggedIn(true);
      setCurrentUser(savedUser);
    }
  }, []);

  // ✅ login handler ფუნქცია
  const login = (formData) => {
    const { email, password } = formData;

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = storedUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      setError("");
      setIsLoggedIn(true);
      setCurrentUser(user);

      // შეინახე current user localStorage-ში
      localStorage.setItem("currentUser", JSON.stringify(user));
    } else {
      setError("არასწორი email ან password");
      setIsLoggedIn(false);
      setCurrentUser(null);
      localStorage.removeItem("currentUser");
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  const { formData, handleChange, handleSubmit } = useForm(
    {
      email: "",
      password: "",
    },
    login
  );

  return (
    <div>
      <h2>Login</h2>

      {isLoggedIn ? (
        <div>
          <p>მომხმარებელი შესულია: {currentUser.email}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Login</button>
        </form>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Login;