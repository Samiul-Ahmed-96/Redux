import { configureStore } from "@reduxjs/toolkit";
import quizSlice from "../features/quiz/quizSlice";

const store = configureStore({
    reducer:{
        quizReducer:quizSlice
    }
})  

export default store;