import { configureStore } from '@reduxjs/toolkit';
import {newsReducer} from './newsSlice';
import {filterReduser} from './filterSlice';
import {contactReduser} from './contactSlice';
import {noticesReducer} from './noticesSlice';
import { authReducer } from "./auth/authSlice";
import {friendReducer} from './friendsSlice';
import storage from 'redux-persist/lib/storage';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    news: newsReducer,
    notices: noticesReducer,
    contact: contactReduser,
    filter: filterReduser,
    friends: friendReducer,
  },
  
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
    immutableCheck: false,
  }),
});

export const persistor = persistStore(store);