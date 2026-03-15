import React from "react";
import useForm from "./useForm";

function Login() {

  const login = (formData) => {
    console.log("ლოგინი შესრულდა:", formData);

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
    </div>
  );
}

export default Login;