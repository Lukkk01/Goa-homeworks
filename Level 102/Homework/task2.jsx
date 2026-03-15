import React from "react";
import useForm from "./useForm";

function Register() {
  const onSubmit = (data) => {
    console.log("რეგისტრაციის მონაცემები:", data);
  };

  const { formData, handleChange, handleSubmit } = useForm(
    {
      email: "",
      password: "",
    },
    onSubmit
  );

  return (
    <div>
      <h2>Register</h2>

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

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;