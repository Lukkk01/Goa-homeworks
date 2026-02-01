import React, { useState } from "react";
import TailwindView from "./TailwindView";

function TailwindContainer() {
  const [cardText, setCardText] = useState("This text comes from the container!");

  return (
    <div>
      <h2 className="text-xl font-semibold text-center my-4">Tailwind Example</h2>
      <TailwindView text={cardText} />
    </div>
  );
}

export default TailwindContainer;
