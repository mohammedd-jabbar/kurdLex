import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { dictionaryApi } from "./services/dictionaryApi";
import submitSliceReducer from "./services/submitSlice";

export const store = configureStore({
  reducer: {
    [dictionaryApi.reducerPath]: dictionaryApi.reducer,
    submitState: submitSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dictionaryApi.middleware),
});
