import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './filterSlice';
import coursesSlice from './coursesSlice';
import userSlice from './userSlice';
import trackerSlice from './trackerSlice';
import diagrammDirectionSlice from './diagrammDirectionSlice';
import currentStatusSlice from './currentStatusSlice';
import recommendationsSlice from './recommendationsSlice';
const store = configureStore({
  reducer: {
    filterCourses: filterSlice,
    courses: coursesSlice,
    user: userSlice,
    recommendations: recommendationsSlice,
    tracker: trackerSlice,
    diagramm: diagrammDirectionSlice,
    status: currentStatusSlice,
  },
});

export default store;
