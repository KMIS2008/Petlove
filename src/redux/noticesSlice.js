import {fetchnotices, fetchnoticesByKeyword} from './operations';
import { createSlice} from '@reduxjs/toolkit';


const allNotices ={
    notices:[],
    totalPages: null,
    isLoading: false,
    error: false, 
}

const handlPending = (state)=> {
    state.isLoading = true}

const handlFulfilled = (state, action)=>{
    state.notices = action.payload.results;
    state.isLoading = false;
    state.error = null;
    state.totalPages = action.payload.totalPages;
 }

const handlReject =(state, action)=>{
    state.isLoading = false;
    state.error = action.payload;
}

const noticesSlice = createSlice({
    name:'notices',
    initialState: allNotices,
       
       extraReducers:
       builder=>{
        builder.addCase(fetchnotices.pending, handlPending)
        .addCase(fetchnotices.fulfilled, handlFulfilled)
        .addCase(fetchnotices.rejected, handlReject)
        .addCase(fetchnoticesByKeyword.pending, handlPending)
        .addCase(fetchnoticesByKeyword.fulfilled, handlFulfilled)
        .addCase(fetchnoticesByKeyword.rejected, handlReject)
       }
})

export const noticesReducer = noticesSlice.reducer;