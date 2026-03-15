import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";

function MyFallback({ error, resetErrorBoundary }) {
  return (
    <div style={{ border: "1px solid red", padding: "10px", margin: "10px" }}>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Retry</button>
    </div>
  );
}

function BuggyComponent({ trigger }) {
  if (trigger) {
    throw new Error("Component crashed!");
  }

  return <div>All good! Trigger is {String(trigger)}</div>;
}

function App() {
  const [trigger, setTrigger] = useState(false);
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => setTrigger((prev) => !prev)}>
        Toggle BuggyComponent
      </button>
      <button onClick={() => setCounter((c) => c + 1)}>Increment Counter</button>

      <ErrorBoundary
        FallbackComponent={MyFallback}
        onReset={() => setTrigger(false)}
        resetKeys={[counter]}
      >
        <BuggyComponent trigger={trigger} />
      </ErrorBoundary>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

