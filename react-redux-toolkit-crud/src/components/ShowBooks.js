import React from 'react'
import { useSelector } from 'react-redux'

const ShowBooks = () => {
  const books = useSelector(state => state.bookReducer.books)
  return (
    <div>
      { books &&
        books.map(singleBook => <div className='book-item'>
            <h4>{singleBook?.id}</h4>
            <h4>{singleBook?.title}</h4>
            <h4>{singleBook?.author}</h4>
          </div> )
      }
    </div>
  )
}

export default ShowBooks