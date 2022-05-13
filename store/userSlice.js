import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  isLoggedIn: false,  
  address: 0,
}

if (typeof window !== "undefined") {
  if (localStorage.getItem("userAddress")) {
    initialState = {
      isLoggedIn: true,
      address: localStorage['userAddress']
    }
  }
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.address = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem('userAddress', action.payload)
    },

    logout: (state) => {
      state.isLoggedIn = false;
      localStorage.removeItem('userAddress')
    }

  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer