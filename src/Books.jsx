import { useEffect, useState } from "react";
import { BASE_API } from "./api/api";
import BookCard from "./components/BookCard";

function formatSearchTerm(searchTerm) {
  return searchTerm.replace(/ /g, "+");
}

export default function AllBooks({ searchTerm }) {
  const [allBooks, setAllBooks] = useState([]);
  let BOOKS_API = BASE_API;
  if (searchTerm) BOOKS_API = `${BASE_API}&q=${formatSearchTerm(searchTerm)}`;
  else BOOKS_API = `${BASE_API}&q=tom+sawyer`;

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(BOOKS_API);
        const books = await response.json();
        setAllBooks(books.docs);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBooks();
  }, [searchTerm]);

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16">
      {allBooks.map((book, idx) => (
        <BookCard key={idx} book={book} />
      ))}
    </ul>
  );
}
