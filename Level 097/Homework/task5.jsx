import { useState } from "react";

// UserView - მხოლოდ View
function UserView({ name, age }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

// UserContainer - State + Logic
function UserContainer() {
  const [name, setName] = useState("John Doe");
  const [age, setAge] = useState(30);

  return (
    <div>
      <h2>User Information</h2>
      {/* State props-ით გადაეცემა View-ს */}
      <UserView name={name} age={age} />
    </div>
  );
}

export default UserContainer;
