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
        }

    }
})

export const {showBooks,addBook,deleteBook} = bookSlice.actions

export default bookSlice.reducer

