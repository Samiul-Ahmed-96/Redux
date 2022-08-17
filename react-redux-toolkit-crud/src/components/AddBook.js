import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../features/books/bookSlice";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAdd = (e) => {
    e.preventDefault();
    const book = {
      id: 3,
      title,
      author,
    };
    dispatch(addBook(book));
    navigate('/showBooks')
  };

  return (
    <div>
      <h4>Add New Book</h4>
      <form onSubmit={handleAdd}>
        <label htmlFor="">Book Title</label>
        <br />
        <input
          onBlur={(e) => setTitle(e.target.value)}
          type="text"
          name=""
          id=""
        />
        <br />
        <label htmlFor="">Author</label>
        <br />
        <input
          onBlur={(e) => setAuthor(e.target.value)}
          type="text"
          name=""
          id=""
        />
        <br />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddBook;
