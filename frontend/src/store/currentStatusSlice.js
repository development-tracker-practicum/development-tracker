import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import trackerApi from '../services/TrackerApi';

export const editStatus = createAsyncThunk(
  'currentStatus/edit',
  async ({ id, data }) => {
    try {
      const response = await trackerApi.editProfessionAndLevel(id, data);
      return response;
    } catch (e) {
      return {
        level_id: {
          profession: data.profession,
          level: data.level_id,
        },
      };
    }
  },
);
const initialState = {
  profession: 'UI/UX дизайнер',
  level: 'Middle',
  isChanged: false,
  isLoading: false,
  isError: false,
};

const currentStatusSlice = createSlice({
  name: 'currentStatus',
  initialState,
  reducers: {},
  extraReducers: {
    [editStatus.pending]: state => {
      state.loading = true;
      state.isError = false;
    },
    [editStatus.fulfilled]: (state, { payload }) => {
      const { level_id } = payload;
      const { profession, level } = level_id;
      state.profession = profession || state.profession;
      state.level = level || state.level;
      state.loading = false;
    },
    [editStatus.rejected]: state => {
      state.loading = false;
      state.isError = true;
    },
  },
});
export const { setStatus } = currentStatusSlice.actions;
export default currentStatusSlice.reducer;
