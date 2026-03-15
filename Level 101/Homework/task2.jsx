import React, { useState } from "react";

function MainComponent() {
  const [bookTitle, setBookTitle] = useState("");
  const [books, setBooks] = useState([]);
  const handleSearch = async (event) => {
    event.preventDefault();

    if (!bookTitle.trim()) return;

    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}`
      );

      const data = await response.json();

      setBooks(data.items || []);
    } catch (error) {
      console.error("შეცდომა მონაცემების წამოღებისას:", error);
    }
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

      <div>
        {books.map((book) => (
          <div key={book.id}>
            <h3>{book.volumeInfo.title}</h3>
            <p>
              ავტორი:{" "}
              {book.volumeInfo.authors
                ? book.volumeInfo.authors.join(", ")
                : "უცნობი"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainComponent;