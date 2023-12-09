import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import trackerApi from '../services/TrackerApi';
export const getSkills = createAsyncThunk('tracker/checkToken', async () => {
  const response = await trackerApi.getSkills();
  return response;
});
export const getRecomen = createAsyncThunk(
  'tracker/recommendation',
  async id => {
    console.log('get');
    const response = await trackerApi.getRecommendation(id);
    return response;
  },
);

const initialState = {
  status: null,
  fetch: null,
  skillList: [],
};

const trackerSlice = createSlice({
  name: 'tracker',
  initialState,
  extraReducers: {
    [getRecomen.pending]: (state, action) => {
      console.log('pending');
    },
    [getRecomen.fulfilled]: (state, action) => {
      console.log(action.payload);
    },
    [getRecomen.rejected]: (state, action) => {
      console.log('somewhere i belong');
    },
  },
});

// export const { } = trackerSlice.actions;
export default trackerSlice.reducer;
