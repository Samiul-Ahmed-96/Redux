import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetchUsers",async()=>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return res.data
    console.log(res.data)
})

const userSlice  = createSlice({
    name:'users',
    initialState:{
        users:[],
        isLoading : false,
        error : null
    },
    extraReducers:(builder) =>{
        builder.addCase(fetchUsers.pending,(state)=>{
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.users = action.payload;
            state.error = null
        });
        builder.addCase(fetchUsers.rejected,(state,action)=>{
            state.isLoading = false;
            state.users = [];
            state.error = action.error.message;
        });
    }
})

export default userSlice.reducer;