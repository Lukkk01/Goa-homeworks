import React, { Component } from "react";
import ReactDOM from "react-dom/client";

function sendErrorToServer({ message, stack, timestamp }) {
  console.log("Sending error to server:");
  console.log("Message:", message);
  console.log("Stack:", stack);
  console.log("Timestamp:", timestamp);
}

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    sendErrorToServer({
      message: error.message,
      stack: info.componentStack,
      timestamp: Date.now(),
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ border: "1px solid red", padding: "10px" }}>
          <h2>Something went wrong.</h2>
          <button onClick={() => this.setState({ hasError: false })}>
            Retry
          </button>
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
    return <button onClick={this.handleClick}>Crash A</button>;
  }
}

class BuggyComponentB extends Component {
  handleClick = () => {
    throw new Error("Crash B!");
  };
  render() {
    return <button onClick={this.handleClick}>Crash B</button>;
  }
}

function App() {
  return (
    <div>
      <ErrorBoundary>
        <BuggyComponentA />
      </ErrorBoundary>

      <ErrorBoundary>
        <BuggyComponentB />
      </ErrorBoundary>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
