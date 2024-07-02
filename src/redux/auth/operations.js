import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

axios.defaults.baseURL = "https://petlove.b.goit.study/api";
const User_URL='/users/current';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  };
  
  const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
  };

  export const registr = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
      try {
        const res = await axios.post('/users/signup', credentials);
        setAuthHeader(res.data.token);
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
      try {
        const res = await axios.post('/users/signin', credentials);
        setAuthHeader(res.data.token);
  
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
      await axios.post('/users/signout');
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });

  export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
  
      if (persistedToken === null) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }
  
      try {
        setAuthHeader(persistedToken);
        const res = await axios.get('/users/current');
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const fetchUserEdit = createAsyncThunk('user/edit', async (info, thunkAPI) => {
    try {
        const response = await axios.patch(`${User_URL}/edit`, info);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// export const registr = createAsyncThunk(
//     'auth/register',
//     async (credentials, thunkAPI) => {
//       try {
//         const res = await axios.post('/users/signup', credentials);
//         setAuthHeader(res.data.token);
//         return res.data;
//       } catch (error) {
//         return thunkAPI.rejectWithValue(error.message);
//       }
//     }
//   );

  // export const logIn = createAsyncThunk(
  //   'auth/login',
  //   async (credentials, thunkAPI) => {
  //     try {
  //       const res = await axios.post('/users/login', credentials);
  //       setAuthHeader(res.data.token);
  
  //       return res.data;
  //     } catch (error) {
  //       return thunkAPI.rejectWithValue(error.message);
  //     }
  //   }
  // );
  
  // export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  //   try {
  //     await axios.post('/users/logout');
  //     clearAuthHeader();
  //   } catch (error) {
  //     return thunkAPI.rejectWithValue(error.message);
  //   }
  // });

  // export const refreshUser = createAsyncThunk(
  //   'auth/refresh',
  //   async (_, thunkAPI) => {
  //     const state = thunkAPI.getState();
  //     const persistedToken = state.auth.token;
  
  //     if (persistedToken === null) {
  //       return thunkAPI.rejectWithValue('Unable to fetch user');
  //     }
  
  //     try {
  //       setAuthHeader(persistedToken);
  //       const res = await axios.get('/users/current');
  //       return res.data;
  //     } catch (error) {
  //       return thunkAPI.rejectWithValue(error.message);
  //     }
  //   }
  // );


  
