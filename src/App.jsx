import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Books from "./Books";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bookshelf from "./Bookshelf";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <BrowserRouter>
      <Navbar setSearchTerm={setSearchTerm} />
      <Routes>
        <Route path="/" element={<Books searchTerm={searchTerm} />} />
        <Route path="/bookshelf" element={<Bookshelf />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
