import React from "react";
import React from "react";
import ModuleStyleView from "./ModuleStyleView";


function ModuleStyleView() {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Card Title</h2>
      <p className={styles.text}>
        This is some descriptive text inside the card. Styling comes from CSS Module.
      </p>
      <button className={styles.button}>Click Me</button>
    </div>
  );
}

function ModuleStyleContainer() {
  return (
    <div>
      <h2>Module Style Example</h2>
      <ModuleStyleView />
    </div>
  );
}

export default ModuleStyleContainer;
