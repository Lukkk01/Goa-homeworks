import { useState } from "react";

function LoginForm() {
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const elements = e.target.elements;
    const name = elements.name.value;
    const password = elements.password.value;

    if (password.length < 8) {
      setShowError(true);
    } else {
      setShowError(false);
      console.log("name:", name);
      console.log("password:", password);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="name" />
      <input type="password" name="password" placeholder="password" />
      <input type="submit" value="sent" />

      {showError && (
        <p style={{ color: "red" }}>
          password has to be at least 6 characters
        </p>
      )}
    </form>
  );
}

export default LoginForm;
