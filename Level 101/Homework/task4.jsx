import React, { useState } from "react";

function MainComponent() {
  const [bookTitle, setBookTitle] = useState("");
  const [books, setBooks] = useState([]);
  const [savedBooks, setSavedBooks] = useState([]);

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

  const handleSave = (book) => {
    // რომ არ დაემატოს ერთი და იგივე წიგნი ორჯერ
    if (savedBooks.find((b) => b.id === book.id)) return;

    setSavedBooks([...savedBooks, book]);
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

      {/* ნაპოვნი წიგნები */}
      {books.length > 0 && (
        <>
          <h2>ძებნის შედეგები</h2>
          <table border="1" cellPadding="8">
            <thead>
              <tr>
                <th>Title</th>
                <th>Authors</th>
                <th>Published Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => {
                const info = book.volumeInfo;

                return (
                  <tr key={book.id}>
                    <td>{info.title || "N/A"}</td>
                    <td>
                      {info.authors
                        ? info.authors.join(", ")
                        : "Unknown"}
                    </td>
                    <td>{info.publishedDate || "N/A"}</td>
                    <td>
                      <button onClick={() => handleSave(book)}>
                        Save
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}

      {/* შენახული წიგნები */}
      {savedBooks.length > 0 && (
        <>
          <h2>შენახული წიგნები</h2>
          <table border="1" cellPadding="8">
            <thead>
              <tr>
                <th>Title</th>
                <th>Authors</th>
                <th>Published Date</th>
              </tr>
            </thead>
            <tbody>
              {savedBooks.map((book) => {
                const info = book.volumeInfo;

                return (
                  <tr key={book.id}>
                    <td>{info.title || "N/A"}</td>
                    <td>
                      {info.authors
                        ? info.authors.join(", ")
                        : "Unknown"}
                    </td>
                    <td>{info.publishedDate || "N/A"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default MainComponent;