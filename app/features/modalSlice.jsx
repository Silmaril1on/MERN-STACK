import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  error: null,
  warning: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
    setWarning: (state, action) => {
      state.warning = action.payload;
    },
  },
});

export const { setLoading, setError, setWarning } = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
