import React from "react";
import useForm from "./useForm";

function Register() {

  const register = (formData) => {
    console.log("მომხმარებელი რეგისტრირებულია:", formData);
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    storedUsers.push(formData);

    localStorage.setItem("users", JSON.stringify(storedUsers));

    alert("რეგისტრაცია წარმატებით დასრულდა!");
  };

  const { formData, handleChange, handleSubmit } = useForm(
    {
      email: "",
      password: "",
    },
    register 
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