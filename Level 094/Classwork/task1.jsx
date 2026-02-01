import { useState } from "react";

function UserInput() {
  const [user, setUser] = useState("");
  const handleChange = (event) => {
    setUser(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={user} 
        onChange={handleChange}
      />

      <p>vinc chawera aq texti magis dawerili texti: {user}</p>
    </div>
  );
}

export default UserInput;
