import {addPet, fetchUserFull} from './operations';
import { createSlice} from '@reduxjs/toolkit';


const userInfo ={
    pets:[],
    userFull:[],
    isLoading: false,
    error: false, 
}

const handlPending = (state)=> {
    state.isLoading = true}

const handlFulfilled = (state, action)=>{
    state.pets= action.payload.pets;
    state.isLoading = false;
    state.error = null;
 }

const handlReject =(state, action)=>{
    state.isLoading = false;
    state.error = action.payload;
}

const userSlice = createSlice({
    name:'user',
    initialState: userInfo,
       
       extraReducers:
       builder=>{
        builder.addCase(addPet.pending, handlPending)
        .addCase(addPet.fulfilled, handlFulfilled)
        .addCase(addPet.rejected, handlReject)
        .addCase(fetchUserFull.pending, handlPending)
        .addCase(fetchUserFull.fulfilled, (state, action)=>{
            state.userFull= action.payload;
            state.isLoading = false;
            state.error = null;
         })
        .addCase(fetchUserFull.rejected, handlReject)
       }
})

export const userReducer = userSlice.reducer;