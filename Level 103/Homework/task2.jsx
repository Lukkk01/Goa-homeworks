import React, { useState } from "react";

function App() {
  const [user, setUser] = useState({ name: "Luka", age: 20 });

  return (
    <div>
      <Component1 user={user} />
    </div>
  );
}

function Component1({ user }) {

  return <Component2 user={user} />;
}

function Component2({ user }) {
  return <Component3 user={user} />;
}

function Component3({ user }) {
  return (
    <div>
      <h2>Name: {user.name}</h2>
      <h3>Age: {user.age}</h3>
    </div>
  );
}

export default App;
