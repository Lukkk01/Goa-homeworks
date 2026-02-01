import Message from "./Message";

function App() {
  const objectStyle = {
    backgroundColor: "lightblue",
    color: "darkblue",
    padding: "10px"
  };

  return (
    <div>
      <h2 style={{ backgroundColor: "lightgreen", color: "darkgreen" }}>
        Inline Styling Example
      </h2>

      <h2 style={objectStyle}>
        Object Variable Styling Example
      </h2>

      <Message />
    </div>
  );
}

export default App;
