import {fetchnotices, fetchnoticesByKeyword, addNotices} from './operations';
import { createSlice} from '@reduxjs/toolkit';


const allNotices ={
    notices:[],
    isFavorite: [],
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

    // reducers: {
    //     addFavorite(state, action) {
    //       const newItem = action.payload;
    //       state.isFavorite.push(newItem);
    //     },
    //     removeFavorite(state, action) {
    //       state.isFavorite = state.isFavorite.filter((item) => item._id !== action.payload._id);
    //     },
    //   },
       
       extraReducers:
       builder=>{
        builder.addCase(fetchnotices.pending, handlPending)
        .addCase(fetchnotices.fulfilled, handlFulfilled)
        .addCase(fetchnotices.rejected, handlReject)
        .addCase(fetchnoticesByKeyword.pending, handlPending)
        .addCase(fetchnoticesByKeyword.fulfilled, handlFulfilled)
        .addCase(fetchnoticesByKeyword.rejected, handlReject)
        .addCase(addNotices.pending, handlPending)
        .addCase(addNotices.fulfilled, (state) => {
            state.isLoading = false;
            state.error = null;
          })
          .addCase(addNotices.rejected, handlReject)
       }
})

export const noticesReducer = noticesSlice.reducer;
// export const { addFavorite, removeFavorite } = noticesSlice.actions;