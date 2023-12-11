import { createSlice } from '@reduxjs/toolkit';
import {
  statisticsForJunior,
  statisticsForMiddle,
} from '../constants/statisticsConstants';
const initialState = {
  middleStatistics: statisticsForMiddle,
  juniorStatistics: statisticsForJunior,
  matchMiddle:
    Object.entries(statisticsForMiddle).reduce((acc, [color, { percent }]) => {
      return (acc += parseInt(percent));
    }, 0) / 8,
  matchJunior:
    Object.entries(statisticsForJunior).reduce((acc, [color, { percent }]) => {
      return (acc += parseInt(percent));
    }, 0) / 8,
};

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
});

// export const {  } = statisticsSlice.actions;
export default statisticsSlice.reducer;
