import { configureStore } from '@reduxjs/toolkit';
import filterCoursesSlice from './filterSlice';
import coursesSlice from './coursesSlice';
import userSlice from './userSlice';
import recommendationListSlice from './recommendationListSlice';
import statisticsSlice from './statisticsSlice';
import diagrammDirectionSlice from './diagrammDirectionSlice';
const store = configureStore({
  reducer: {
    filterCourses: filterCoursesSlice,
    courses: coursesSlice,
    user: userSlice,
    recommendations: recommendationListSlice,
    statistics: statisticsSlice,
    diagramm: diagrammDirectionSlice,
  },
});

export default store;
