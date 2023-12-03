import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { dictionaryApi } from "./services/dictionaryApi";
import dataDictionarySliceReducer from "./services/dataDictionarySlice";
import submitSliceReducer from "./services/submitSlice";

export const store = configureStore({
  reducer: {
    [dictionaryApi.reducerPath]: dictionaryApi.reducer,
    submitState: submitSliceReducer,
    dataDictionarySlice: dataDictionarySliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dictionaryApi.middleware),
});
