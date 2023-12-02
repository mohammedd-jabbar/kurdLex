import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSubmitState: false,
};

export const submitSlice = createSlice({
  name: "submitState",
  initialState,
  reducers: {
    toggleSubmitState: (state) => {
      state.isSubmitState = !state.isSubmitState;
    },
  },
});

export const { toggleSubmitState } = submitSlice.actions;

export default submitSlice.reducer;
