import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
    books: [
      { id: 1, title: "Bangladesh", author: "A Islam" },
      { id: 2, title: "Bangladeshi", author: "B Islam" },
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

