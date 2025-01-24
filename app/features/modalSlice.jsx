import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  error: null,
  warning: null,
  rateModal: null,
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
    setRateModal: (state, action) => {
      state.rateModal = action.payload;
    },
  },
});

export const { setLoading, setError, setWarning, setRateModal } =
  modalSlice.actions;

export const modalReducer = modalSlice.reducer;
