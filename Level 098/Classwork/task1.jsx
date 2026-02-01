function App() {
  const objectStyle = {
    backgroundColor: "lightgreen",
    color: "darkgreen",
    padding: "10px"
  };

  return (
    <div>
      <div>
        <h2 style={{ backgroundColor: "lightgreen", color: "darkgreen" }}>
          Inline Styling
        </h2>
      </div>

      <div>
        <h2 style={objectStyle}>
          Object Variable Styling
        </h2>
      </div>
    </div>
  );
}

export default App;
