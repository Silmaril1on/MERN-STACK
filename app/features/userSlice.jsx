import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  userDetails: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action) => {
      const { id, email, username, token } = action.payload;
      state.user = { id, email, username, token };
    },
    clearUser: (state) => {
      state.user = null;
    },
    getUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    updateFavorites: (state, action) => {
      if (state.userDetails) {
        state.userDetails.favorites = action.payload;
      }
    },
  },
});

export const { getUser, clearUser, getUserDetails, updateFavorites } =
  userSlice.actions;

export const userReducer = userSlice.reducer;
