import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { deleteBook } from '../features/books/bookSlice';

const ShowBooks = () => {
  const books = useSelector(state => state.bookReducer.books)
  const dispatch = useDispatch();
  const handleDelete = (id) =>{
    dispatch(deleteBook(id))
  }
  console.log(books)
  return (
    <div className="main-wrapper">
    <div>
    <h2>List of Books</h2>
    <table>
      <thead>
        <tr>
          {/* <th>ID</th> */}
          <th>Title</th>
          <th>Author</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {books &&
          books.map((book) => {
            const { id, title, author } = book;
            return (
              <tr key={id}>
                <td>{title}</td>
                <td>{author}</td>
                <td>
                  <Link to="/editBook" state={{ id, title, author }}>
                    <button>Edit</button>
                  </Link>
                  <button
                    onClick={() => {
                      handleDelete(id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  </div>
    </div>
  )
}

export default ShowBooks