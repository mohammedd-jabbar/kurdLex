import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataDictionary: null,
};

export const dataDictionarySlice = createSlice({
  name: "dataDictionary",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.dataDictionary = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setData } = dataDictionarySlice.actions;

export default dataDictionarySlice.reducer;
