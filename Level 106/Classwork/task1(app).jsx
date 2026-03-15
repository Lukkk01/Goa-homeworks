import React from "react";
import { ErrorBoundary } from "./ErrorBoundary";
import { Test } from "./Test";
import { SafeComponent } from "./SafeComponent";

function App() {
  return (
    <div>
      <h1>ErrorBoundary Demo</h1>

      <ErrorBoundary>
        <Test shouldThrow={false} name="Component A" />
        <Test shouldThrow={true} name="Component B" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Test shouldThrow={true} name="Component C" />
      </ErrorBoundary>

      <Test shouldThrow={false} name="Component D (No Boundary)" />

      <SafeComponent />
    </div>
  );
}

export default App;