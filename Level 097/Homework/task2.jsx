import { useState } from "react";

// ListView - მხოლოდ View
function ListView({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

// ListContainer - State + Logic
function ListContainer() {
  const [items, setItems] = useState(["Apple", "Banana", "Orange"]);

  return (
    <div>
      <h2>Fruits List</h2>
      {/* სია props-ით გადაეცემა View-ს */}
      <ListView items={items} />
    </div>
  );
}

export default ListContainer;
