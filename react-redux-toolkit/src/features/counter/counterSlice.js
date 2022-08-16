import { createSlice } from "@reduxjs/toolkit";

const counterSlice =  createSlice({
    name:'counter',
    initialState:{
        count:0
    },
    reducers:{
        increment : (state)=>{
            state.count = state.count + 1 
        },
        incrementByValue: (state,action) =>{
            state.count = state.count + action.payload
        },
        decrement : state =>{
            state.count = state.count - 1
        },
        reset : state =>{
            state.count = 0
        }
    }
})
export const {increment,decrement,reset,incrementByValue} = counterSlice.actions;
export  default  counterSlice.reducer;