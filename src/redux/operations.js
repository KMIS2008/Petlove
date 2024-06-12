import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
axios.defaults.baseURL = "https://petlove.b.goit.study/api";
const NEWS_URL= '/news';
const Notices_URL='/notices';

export const fetchnews = createAsyncThunk('news/allNews', async(pageNumber, thunkAPI)=>{
    try {
        const response = await axios.get(`${NEWS_URL}?page=${pageNumber}&limit=6`);
        return response.data;
        
    } catch (e){
        return thunkAPI.rejectWithValue(e.message)
    }
})

export const fetchNewsByKeyword = createAsyncThunk('news/keywordNews', async({keyword, pageNumber},thunkAPI) => {
    try {
        const response = await axios.get(`${NEWS_URL}?keyword=${keyword}&page=${pageNumber}&limit=6`);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message)
    }
});

export const fetchnotices = createAsyncThunk('notices', async(pageNumber, thunkAPI)=>{
    try {
        const response = await axios.get(`${Notices_URL}?page=${pageNumber}&limit=6`);
        return response.data;
    } catch (e){
        return thunkAPI.rejectWithValue(e.message)
    }
})

export const fetchnoticesByKeyword = createAsyncThunk('notices/keyword', async({keyword, pageNumber}, thunkAPI)=>{
    try {
        const response = await axios.get(`${Notices_URL}?keyword=${keyword}$page=${pageNumber}&limit=6`);
        return response.data;
    } catch (e){
        return thunkAPI.rejectWithValue(e.message)
    }
})



// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI)=>{
    try {
          const response = await axios.get("/contacts");
          return response.data;  
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message)
    }

})


export const addContact = createAsyncThunk("contacts/addContact", async ({ name, number }, thunkAPI)=>{
    try {
        const response = await axios.post("/contacts", { name, number });
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message)
    }
})

export const deleteContact = createAsyncThunk("contacts/deleteContact", async(contactId, thunkAPI)=>{
    try {
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message)
    }
})