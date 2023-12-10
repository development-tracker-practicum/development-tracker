import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiAuth from '../services/AuthApi';
export const signup = createAsyncThunk(
  'user/signup',
  async ({ email, password, username }) => {
    const response = await apiAuth.registration({ email, password, username });
    return response;
  },
);
export const signin = createAsyncThunk(
  'user/signin',
  async ({ email, password }) => {
    const response = await apiAuth.authorization({ email, password });
    return response;
  },
);

export const checkToken = createAsyncThunk(
  'user/checkToken',
  async ({ uid, token }) => {
    const response = await apiAuth.checkToken({ uid, token });
    return response;
  },
);

const initialState = {
  id: null,
  name: 'Эльвира',
  isLogged: false,
  currentProfession: 'UI/UX дизайнер',
  currentLevel: 'Junior',
  currentMatch: '95%',
  authToken: null,
  status: null,
  error: null,
  fetch: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    pickTarget: (state, action) => {
      console.log(action.payload);
    },
    [signin.pending]: (state, action) => {
      state.status = 'pending';
      state.fetch = 'signin';
      state.error = '';
    },
    [signin.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.status = 'fulfilled';
      state.isLogged = true;
      state.authToken = action.payload.auth_token;
    },
    [signin.rejected]: (state, action) => {
      state.status = 'rejected';
      state.isLogged = false;
      state.error = action.error;
      state.status = '';
    },
    [signup.pending]: (state, action) => {
      state.status = 'pending';
      state.fetch = 'signup';
      state.error = '';
    },
    [signup.fulfilled]: (state, action) => {
      state.status = 'fulfilled';
      setTimeout(() => {
        state.status = '';
      }, 500);
    },
    [signup.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.error;
      state.status = '';
    },
  },

  reducers: {
    resetStatus(state, action) {
      state.status = '';
      state.fetch = null;
    },
    loginUser(state, action) {
      state.isLogged = true;
    },
    logout(state) {
      state.isLogged = false;
    },
    setUser(state, action) {
      const { level, profession, name, match } = action.payload;
      state.name = name || state.name;
      state.currentProfession = profession || state.currentProfession;
      state.currentLevel = level || state.currentLevel;
      state.currentMatch = match || state.currentMatch;
    },
  },
});

export const { loginUser, logout, setUser, resetStatus } = userSlice.actions;
export default userSlice.reducer;
