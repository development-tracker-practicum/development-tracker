import { configureStore } from '@reduxjs/toolkit';
import filterCoursesSlice from './FilterSlice';
import coursesSlice from './coursesSlice';
import userSlice from './userSlice';
import recommendationListSlice from './recommendationListSlice';
import statisticsSlice from './statisticsSlice';
import diagrammDirectionSlice from './DiagrammDirectionSlice';
import targetSlice from './targetSlice';
const store = configureStore({
  reducer: {
    filterCourses: filterCoursesSlice,
    courses: coursesSlice,
    user: userSlice,
    recommendations: recommendationListSlice,
    statistics: statisticsSlice,
    diagramm: diagrammDirectionSlice,
    target: targetSlice,
  },
});

export default store;
