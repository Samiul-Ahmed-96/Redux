import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
    books: [
      { id: 1, title: "The Hollow Kind", author: "Andy Davidson" },
      { id: 2, title: "Shutter", author: "Ramona Emerson" },
      { id: 3, title: "The Lost Ticket", author: "Freya Sampson" },
      { id: 4, title: "By the Book", author: "asmine Guillory" },
      { id: 5, title: "Mad about You", author: "Mhairi McFarlane" },
    ],
  };

const bookSlice = createSlice({
    name:'book',
    initialState:initialBooks,
    reducers:{
        showBooks : (state) => state,
        addBook:(state,action)=>{
            state.books.push(action.payload)
        },
        deleteBook:(state,action)=>{
         const id = action.payload; 
         state.books =  state.books.filter(book => book.id !== id)
        },
        updateBook:(state,action)=>{
          const {id,title,author} = action.payload
          const existBook = state.books.filter(book => book.id === id)
          if(existBook){
            existBook[0].title = title;
            existBook[0].author = author;
          }
        }

    }
})

export const {showBooks,addBook,deleteBook,updateBook} = bookSlice.actions

export default bookSlice.reducer

