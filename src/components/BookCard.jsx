import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function handleAdd(book) {
  let booksArray = JSON.parse(localStorage.getItem("booksArray"));
  if (!booksArray) booksArray = [];

  if (
    booksArray.find(
      (item) =>
        item.author_name === book.author_name && item.title === book.title
    )
  ) {
    return;
  }

  booksArray.push(book);
  localStorage.setItem("booksArray", JSON.stringify(booksArray));
  toast("Added book to bookshelf!");
}

const BookCard = ({ book }) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{book.title}</h2>
        <p>{book.author_name}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-secondary" onClick={() => handleAdd(book)}>
            Add to bookshelf
            <ToastContainer />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
