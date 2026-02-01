// StyleObjectView - მხოლოდ View
function StyleObjectView({ titleStyle, boxStyle }) {
  return (
    <div>
      <h2 style={titleStyle}>Styled Title</h2>
      <div style={boxStyle}>
        <p>This is a styled box using inline styles.</p>
      </div>
    </div>
  );
}

// StyleObjectContainer - Style objects + props
function StyleObjectContainer() {
  // სხვადასხვა style ობიექტი
  const titleStyle = {
    color: "#FF5722",
    textAlign: "center",
    fontSize: "24px",
    marginBottom: "10px"
  };

  const boxStyle = {
    backgroundColor: "#E0F7FA",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    border: "2px solid #00796B"
  };

  return (
    <div>
      <h2>Style Object Example</h2>
      {/* style objects props-ით გადაეცემა View-ს */}
      <StyleObjectView titleStyle={titleStyle} boxStyle={boxStyle} />
    </div>
  );
}

export default StyleObjectContainer;
