import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import trackerApi from '../services/TrackerApi';
const initialState = {
  isTargetChanged: false,
  currentTarget: '',
};

export const fetchChageTarget = createAsyncThunk(
  'user/checkToken',
  async data => {
    const response = await trackerApi.editProfessionAndLevel(data);
    return response;
  },
);
const targetSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    changeTarget(state, action) {
      state.currentTarget = action.payload;
      state.isTargetChanged = true;
    },
  },
  extraReducers: {
    [fetchChageTarget.pending]: (state, action) => {},
    [fetchChageTarget.fulfilled]: (state, action) => {},
    [fetchChageTarget.rejected]: (state, action) => {},
  },
});
export const { changeTarget } = targetSlice.actions;
export default targetSlice.reducer;
