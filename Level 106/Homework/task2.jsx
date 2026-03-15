import React, { Component } from "react";
import ReactDOM from "react-dom/client";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught by ErrorBoundary:", error);
    console.error("Component stack:", info.componentStack);
  }

  reset = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      const message = this.props.message || "Something went wrong.";
      return (
        <div style={{ border: "1px solid red", padding: "10px", margin: "10px" }}>
          <h2>{message}</h2>
          <button onClick={this.reset}>Retry</button>
        </div>
      );
    }

    return this.props.children;
  }
}

class BuggyComponentA extends Component {
  handleClick = () => {
    throw new Error("Crash A!");
  };

  render() {
    return (
      <div>
        <h3>Buggy A</h3>
        <button onClick={this.handleClick}>Crash A</button>
      </div>
    );
  }
}

class BuggyComponentB extends Component {
  handleClick = () => {
    throw new Error("Crash B!");
  };

  render() {
    return (
      <div>
        <h3>Buggy B</h3>
        <button onClick={this.handleClick}>Crash B</button>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <ErrorBoundary message="Buggy A failed">
        <BuggyComponentA />
      </ErrorBoundary>

      <ErrorBoundary message="Buggy B failed">
        <BuggyComponentB />
      </ErrorBoundary>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
