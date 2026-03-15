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

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }

    return this.props.children;
  }
}

class BuggyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { crash: false };
  }

  handleClick = () => {
    throw new Error("Crash!");
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Crash</button>
      </div>
    );
  }
}

function App() {
  return (
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
