import { useContext } from "react";
import { NameContext } from "./NameContext";

export default function Component3() {
  const name = useContext(NameContext);

  return <h2>Component3: {name}</h2>;
}
