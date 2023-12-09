import { createSlice } from '@reduxjs/toolkit';
import {
  statisticsForJunior,
  statisticsForMiddle,
} from '../constants/statisticsConstants';
const initialState = {
  middleStatistics: statisticsForMiddle,
  juniorStatistics: statisticsForJunior,
};

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
});

// export const {  } = statisticsSlice.actions;
export default statisticsSlice.reducer;
