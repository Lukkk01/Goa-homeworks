import React, { useState } from "react";

function MainComponent() {
  const [bookTitle, setBookTitle] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    console.log("ძებნილი წიგნი:", bookTitle);
  };

  return (
    <div>
      <h1>წიგნის ძიება</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="შეიყვანეთ წიგნის სახელი..."
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
        />

        <button type="submit">ძებნა</button>
      </form>
    </div>
  );
}

export default MainComponent;