import {fetchnotices, fetchnoticesByKeyword, addNotices, removeNotices, fetchNoticesId} from './operations';
import { createSlice} from '@reduxjs/toolkit';


const allNotices ={
    notices:[],
    noticeId:[],
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
        .addCase(fetchNoticesId.pending, handlPending)
        .addCase(fetchNoticesId.fulfilled, (state,action) => {
            state.noticeId = action.payload;
            state.isLoading = false;
            state.error = null;
        })
        .addCase(fetchNoticesId.rejected, handlReject)
        .addCase(addNotices.pending, handlPending)
        .addCase(addNotices.fulfilled, (state,action) => {
            // state.isFavorite=action.payload;
            const newItem = action.payload;
            state.isFavorite.push(newItem);
            state.isLoading = false;
            state.error = null;
           
          })
        .addCase(addNotices.rejected, handlReject)
        .addCase(removeNotices.pending, handlPending)
        .addCase(removeNotices.fulfilled, (state, action) => {
            const removeItem = action.payload; 
            state.isFavorite = state.isFavorite.filter((id) => id !== removeItem);
            state.isLoading = false;
            state.error = null;
          })
        .addCase(removeNotices.rejected, handlReject)
       }
})

export const noticesReducer = noticesSlice.reducer;
