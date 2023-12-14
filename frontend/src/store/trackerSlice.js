import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import trackerApi from '../services/TrackerApi';
import { statisticsApiTest } from '../constants/testApiConstnts';
import { initialStateOfStatistics } from '../constants/trackerConstants';

const slicerName = 'tracker';

export const fetchSkills = createAsyncThunk('statistics/skills', async () => {
  try {
    const response = await trackerApi.getSkills();
    if (response.length) {
      return response;
    }
    throw new Error('Пустой массив');
  } catch (e) {
    return statisticsApiTest;
  }
});

const initialState = {
  middleStatistics: initialStateOfStatistics,
  juniorStatistics: initialStateOfStatistics,
  currentStatistics: [],
};

const trackerSlice = createSlice({
  name: slicerName,
  initialState,
  reducers: {
    setCurrentStatistics(state, action) {
      state.currentStatistics = action.payload;
    },
  },
  extraReducers: {
    [fetchSkills.fulfilled]: (state, action) => {
      const [middle, junior] = action.payload;
      state.middleStatistics = middle.skill_id;
      state.juniorStatistics = junior.skill_id;
    },
  },
});

export const totalMatchMiddle = createSelector(
  state => state.tracker,
  ({ middleStatistics }) => {
    if (middleStatistics) {
      console.log(middleStatistics);
    }
    return Math.round(
      Object.values(middleStatistics).reduce(
        (acc, { skill_percent }) => (acc += parseInt(skill_percent)),
        0,
      ) / 8,
    );
  },
);
export const totalMatchJunior = createSelector(
  state => state.tracker,
  ({ juniorStatistics }) => {
    return Math.round(
      Object.values(juniorStatistics).reduce(
        (acc, { skill_percent }) => (acc += parseInt(skill_percent)),
        0,
      ) / 6,
    );
  },
);
export const { setCurrentStatistics } = trackerSlice.actions;
export default trackerSlice.reducer;
