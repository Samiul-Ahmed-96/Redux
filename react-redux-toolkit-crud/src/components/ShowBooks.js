import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from '../features/books/bookSlice';

const ShowBooks = () => {
  const books = useSelector(state => state.bookReducer.books)
  const dispatch = useDispatch();
  const handleDelete = (id) =>{
    dispatch(deleteBook(id))
  }
  return (
    <div>
      { books &&
        books.map(singleBook => <div className='book-item'>
            <h4>{singleBook.id}</h4>
            <h4>{singleBook.title}</h4>
            <h4>{singleBook.author}</h4>
            <button onClick={()=>handleDelete(singleBook.id)}>Delete</button>
          </div> )
      }
    </div>
  )
}

export default ShowBooks