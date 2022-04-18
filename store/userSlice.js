import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,  
  address: 0,
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.address = action.payload;
      state.isLoggedIn = true;
    },

    logout: (state) => {
      state.isLoggedIn = false;
    }

  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer