import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { coursesList } from '../constants/coursesList';
import trackerApi from '../services/TrackerApi';
import { articleList } from '../constants/articleListConstants';
import { practiceList } from '../constants/practiseListConstants';
import { recomApi } from '../constants/testApiConstnts';
const initialState = {
  list: {
    coursesList: [],
    practiceList: [],
    articleList: [],
    coursesListForJunior: coursesList.filter(
      card => card.price === 'Бесплатно',
    ),
  },
  status: '',
  isLoading: false,
  filtredList: [],
};
export const getRecommendations = createAsyncThunk(
  'recommendations/getList',
  async ({ userID }) => {
    try {
      const response = await trackerApi.getRecommendations(userID);
      return {
        coursesList,
        articleList,
        practiceList,
      };
    } catch (e) {
      return {
        coursesList,
        articleList,
        practiceList,
      };
    }
  },
);
const recommendationListSilce = createSlice({
  name: 'recommendations',
  initialState,
  reducers: {
    setNewCourses(state, { payload }) {
      const { articleList, practiceList, coursesList } = payload;
      state.list.coursesList = coursesList || state.list.coursesList;
      state.list.practiceList = practiceList || state.list.practiceList;
      state.list.articleList = articleList || state.list.articleList;
    },
  },
  extraReducers: {
    [getRecommendations.pending]: state => {
      state.status = 'pending';
      state.isLoading = true;
    },
    [getRecommendations.fulfilled]: (state, action) => {
      state.status = 'fulfilled';
      const { coursesList, articleList, practiceList } = action.payload;
      state.list.coursesList = coursesList;
      state.list.practiceList = practiceList;
      state.list.articleList = articleList;
      localStorage.setItem(
        'list',
        JSON.stringify({ coursesList, practiceList, articleList }),
      );
      state.isLoading = false;
    },
    [getRecommendations.rejected]: state => {
      state.status = 'rejected';
      state.isLoading = false;
    },
  },
});

export const { setFiltredListPrice, setFiltredListDuration, setNewCourses } =
  recommendationListSilce.actions;
export default recommendationListSilce.reducer;
