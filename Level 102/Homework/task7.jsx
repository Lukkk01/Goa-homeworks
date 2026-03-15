import React, { useState } from "react";
import useForm from "./useForm";

function Login() {
  const [error, setError] = useState("");

  const login = (formData) => {
    const { email, password } = formData;

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const user = storedUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      setError("");
      alert(`მომხმარებელი ${email} წარმატებით შევიდა სისტემაში!`);
    } else {
      setError("არასწორი email ან password");
    }
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

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Login;