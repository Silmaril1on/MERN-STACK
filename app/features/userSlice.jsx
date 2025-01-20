import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
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
  },
});

export const { getUser, clearUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
