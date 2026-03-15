import React, { useState, useEffect } from "react";

function MainComponent() {
  const [bookTitle, setBookTitle] = useState("");
  const [books, setBooks] = useState([]);
  const [savedBooks, setSavedBooks] = useState(() => {
    // ინიციალიზაცია localStorage-დან
    const stored = localStorage.getItem("savedBooks");
    return stored ? JSON.parse(stored) : [];
  });

  // ყოველ ჯერზე როცა savedBooks შეიცვლება → შეინახოს localStorage-ში
  useEffect(() => {
    localStorage.setItem("savedBooks", JSON.stringify(savedBooks));
  }, [savedBooks]);

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
    if (savedBooks.find((b) => b.id === book.id)) return;
    setSavedBooks([...savedBooks, book]);
  };

  const handleRemove = (id) => {
    const updated = savedBooks.filter((book) => book.id !== id);
    setSavedBooks(updated);
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

      {/* ძებნის შედეგები */}
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
                <th>Action</th>
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
                    <td>
                      <button onClick={() => handleRemove(book.id)}>
                        Remove
                      </button>
                    </td>
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