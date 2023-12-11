import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { coursesList } from '../constants/coursesList';
import trackerApi from '../services/TrackerApi';
import { articleList } from '../constants/articleListConstants';
import { practiceList } from '../constants/practiseListConstants';
const initialState = {
  list: {
    coursesList,
    practiceList,
    articleList,
  },
  status: '',
  mode: 'initial',
  filtredList: [],
};
export const editTarget = createAsyncThunk(
  'user/signup',
  async (userID, data) => {
    const response = await trackerApi.editProfessionAndLevel(userID, data);
    return response;
  },
);
const recommendationListSilce = createSlice({
  name: 'recommendations',
  initialState,
  reducers: {},
  extraReducers: {
    [editTarget.pending]: (state, action) => {
      state.status = 'pending';
    },
    [editTarget.fulfilled]: (state, action) => {
      state.status = 'fulfilled';
      const [id, userId, courses, practices, articles] = action.payload;
      state.list.coursesList = courses;
      state.list.practiceList = practices;
      state.list.articleList = articles;
    },
    [editTarget.rejected]: state => {
      state.status = 'rejected';
    },
  },
});

export const { setFiltredListPrice, setFiltredListDuration } =
  recommendationListSilce.actions;
export default recommendationListSilce.reducer;
