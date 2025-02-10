import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  error: null,
  warning: null,
  selectedArtistId: null,
  reviewModal: null,
  reviewsData: [],
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
    setSelectedArtistId: (state, action) => {
      state.selectedArtistId = action.payload;
    },
    setReviewModal: (state, action) => {
      state.reviewModal = action.payload;
    },
    setReviewsData: (state, action) => {
      state.reviewsData = action.payload;
    },
  },
});

export const {
  setLoading,
  setError,
  setWarning,
  setSelectedArtistId,
  setReviewModal,
  setReviewsData,
} = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
