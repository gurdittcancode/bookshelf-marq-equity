import { Link } from "react-router-dom";

const Navbar = ({ setSearchTerm }) => {
  function handleInputChange(ev) {
    setSearchTerm(ev.target.value);
  }

  return (
    <div className="navbar">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost text-xl">
          Bookshelf
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search for book"
            className="input input-bordered w-24 md:w-auto"
            onChange={handleInputChange}
          />
        </div>
        <div className="navbar-end">
          <Link to={"/bookshelf"} className="btn btn-secondary">
            View Bookshelf
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
