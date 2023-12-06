import { createSlice } from '@reduxjs/toolkit';
import { intialCards } from '../constants/constants';
const initialState = {
  name: '',
  isLogged: false,
  currentProfession: 'UI/UX дизайнер',
  currentLevel: 'Junior',
  currentMatch: '92%',
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
    setUser(state, action) {
      state.name = action.payload.name || state.name;
      state.currentProfession =
        action.payload.profession || state.currentProfession;
      state.currentLevel = action.payload.currentLevel || state.currentLevel;
      state.currentMatch = action.payload.currentMatch || state.currentMatch;
    },
  },
});
export const { loginUser, logout, setUser } = userSlice.actions;
export default userSlice.reducer;
