import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiAuth from '../services/AuthApi';
import userApi from '../services/UserApi';
export const signup = createAsyncThunk(
  'user/signup',
  async ({ email, password, username }) => {
    const response = await userApi.registration({ email, password, username });
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
    const response = await userApi.checkToken({ uid, token });
    return response;
  },
);

const initialState = {
  id: null,
  username: 'Эльвира',
  email: '',
  isLogged: false,
  authToken: null,
  status: null,
  error: null,
  fetch: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetStatus(state) {
      state.status = '';
      state.fetch = null;
    },
    loginUser(state) {
      state.isLogged = true;
    },
    logout(state) {
      state.isLogged = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(signin.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.isLogged = true;
      state.authToken = action.payload.auth_token;
    }),
      builder.addCase(signin.pending, (state, action) => {
        state.status = 'pending';
        state.fetch = 'signin';
        state.error = '';
      }),
      builder.addCase(signin.rejected, (state, action) => {
        state.status = 'rejected';
        state.isLogged = false;
        state.error = action.error;
        state.status = '';
      }),
      builder.addCase(signup.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        const { id, username, email } = action.payload;
        state.id = id || state.id;
        state.username = username || state.username;
        state.email = email || state.email;
      }),
      builder.addCase(signup.pending, (state, action) => {
        state.status = 'pending';
        state.fetch = 'signup';
        state.error = '';
      }),
      builder.addCase(signup.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error;
        state.status = '';
      });
  },
});

export const { loginUser, logout, setUser, resetStatus } = userSlice.actions;
export default userSlice.reducer;
