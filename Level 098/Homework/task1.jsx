// InlineStyleView - მხოლოდ View
function InlineStyleView({ style }) {
  return (
    <div style={style}>
      <p>Centered Text</p>
    </div>
  );
}

// InlineStyleContainer - Style logic
function InlineStyleContainer() {
  // JavaScript style ობიექტი
  const style = {
    backgroundColor: "#4CAF50",
    padding: "20px",
    textAlign: "center", // ტექსტი ცენტრში
    color: "white",      // ტექსტის ფერი უკეთესად გამოიყურება
    borderRadius: "8px"
  };

  return (
    <div>
      <h2>Inline Style Example</h2>
      {/* style props-ით გადაეცემა View-ს */}
      <InlineStyleView style={style} />
    </div>
  );
}

export default InlineStyleContainer;
