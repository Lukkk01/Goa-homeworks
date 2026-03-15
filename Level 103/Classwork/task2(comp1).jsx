import { useState } from "react";
import Component2 from "./Component2";
import { NameContext } from "./NameContext";

export default function Component1() {
  const [name] = useState("Giorgi");

  return (
    <NameContext.Provider value={name}>
      <h2>Component1: {name}</h2>
      <Component2 />
    </NameContext.Provider>
  );
}
