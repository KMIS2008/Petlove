import {fetchnews} from './operations';
import { createSlice} from '@reduxjs/toolkit';


const allNews ={
    news:[],
    isLoading: false,
    error: false, 
}

const handlPending = (state)=> {
    state.isLoading = true}

const handlFulfilled = (state, action)=>{
    state.news = action.payload;
    state.isLoading = false;
    state.error = null;
 }

const handlReject =(state, action)=>{
    state.isLoading = false;
    state.error = action.payload;
}

const newsSlice = createSlice({
    name:'news',
    initialState: allNews,
       
       extraReducers:
       builder=>{
        builder.addCase(fetchnews.pending, handlPending)
        .addCase(fetchnews.fulfilled, handlFulfilled)
        .addCase(fetchnews.rejected, handlReject)
       }
})

export const newsReducer = newsSlice.reducer;