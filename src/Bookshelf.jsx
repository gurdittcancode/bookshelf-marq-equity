import { useEffect } from "react";
import { useState } from "react";
import BookCard from "./components/BookCard";

export default function Bookshelf() {
  const [bookshelf, setBookshelf] = useState(null);

  useEffect(() => {
    const bookArray = JSON.parse(localStorage.getItem("booksArray"));
    if (bookArray) setBookshelf(bookArray);
  }, []);

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16">
      {bookshelf &&
        bookshelf.map((book, idx) => <BookCard key={idx} book={book} />)}
    </ul>
  );
}
