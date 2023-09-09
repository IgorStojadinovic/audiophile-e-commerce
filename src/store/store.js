import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import cartSliceReducer from "./cartSlice";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'


const persistConfig = {
  key: 'root', // Key for storing the data in storage
  storage, // Storage engine to use
};


const persistedReducer = persistReducer(persistConfig, cartSliceReducer)


export  const  store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})
