import { useState } from "react";
import Component2 from "./Component2";

export default function Component1() {
  const [name] = useState("Giorgi");

  return (
    <div>
      <h2>Component1: {name}</h2>
      <Component2 name={name} />
    </div>
  );
}
