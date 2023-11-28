import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { dictionaryApi } from "./services/dictionaryApi";

export const store = configureStore({
  reducer: {
    [dictionaryApi.reducerPath]: dictionaryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dictionaryApi.middleware),
});
