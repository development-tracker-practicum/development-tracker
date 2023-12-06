import { createSlice } from '@reduxjs/toolkit';
import { intialCards } from '../constants/constants';
const initialState = {
  name: '',
  isLogged: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser(state, action) {
      state.isLogged = true;
    },
    logout(state) {
      state.isLogged = false;
    },
  },
});
export const { loginUser, logout } = userSlice.actions;
export default userSlice.reducer;
