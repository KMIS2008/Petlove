import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
axios.defaults.baseURL = "https://petlove.b.goit.study/api";
const NEWS_URL= '/news';
const Notices_URL='/notices';
const Friends_URL='/friends';
const User_URL='/users/current';

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

export const fetchnoticesByKeyword = createAsyncThunk('notices/keywordNotice', async({keyword, pageNumber}, thunkAPI)=>{
    try {
        const response = await axios.get(`${Notices_URL}?keyword=${keyword}&page=${pageNumber}&limit=6`);
        return response.data;
    } catch (e){
        return thunkAPI.rejectWithValue(e.message)
    }
})

export const fetchNoticesId = createAsyncThunk('notices/id', async(_id, thunkAPI)=>{
    try {
        const response = await axios.get(`${Notices_URL}/${_id}`);
    
         return response.data;
       
    } catch (e){
        return thunkAPI.rejectWithValue(e.message)
    }
})

export const addNotices = createAsyncThunk('notices/favorites/add', async(_id, thunkAPI)=>{
    try {
        const response = await axios.post(`${Notices_URL}/favorites/add/${_id}`);
    
        return response.data;
    } catch (e){
        return thunkAPI.rejectWithValue(e.message)
    }
})

export const removeNotices = createAsyncThunk('notices/favorites/remove', async(_id, thunkAPI)=>{
    try {
        const response = await axios.delete(`${Notices_URL}/favorites/remove/${_id}`);
   
        return response.data;
        
    } catch (e){
        return thunkAPI.rejectWithValue(e.message)
    }
})

export const fetchFriends = createAsyncThunk('friends', async (_, thunkAPI) => {
    try {
        const response = await axios.get(`${Friends_URL}`);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const addPet = createAsyncThunk('pets/add', async ({title,name,species,sex,birthday,imgURL}, thunkAPI) => {
    try {
        const response = await axios.post(`${User_URL}/pets/add`, {title,name,species,sex,birthday,imgURL});
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const removePet = createAsyncThunk('pets/remove', async (id, thunkAPI) => {
    try {
        const response = await axios.delete(`${User_URL}/pets/remove/${id}`);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const fetchUserFull = createAsyncThunk('user/full', async (_, thunkAPI) => {
    try {
        const response = await axios.get(`${User_URL}/full`);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});




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