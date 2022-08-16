import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import userSlice from "../features/users/userSlice";

const store =  configureStore({
    reducer:{
        counter : counterSlice,
        users : userSlice
    }
})

export default store;