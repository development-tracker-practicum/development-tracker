import { configureStore } from '@reduxjs/toolkit';
import filterCoursesSlice from './FilterSlice';
import coursesSlice from './coursesSlice';
import userSlice from './userSlice';
import changeTargetSlice from './changeTargetSlice';
import TrackerSlice from './TrackerSlice';
import recommendationListSlice from './recommendationListSlice';
import StatisticsSlice from './StatisticsSlice';
import DiagrammDirectionSlice from './DiagrammDirectionSlice';
const store = configureStore({
  reducer: {
    filterCourses: filterCoursesSlice,
    courses: coursesSlice,
    user: userSlice,
    changeTarget: changeTargetSlice,
    tracker: TrackerSlice,
    recommendations: recommendationListSlice,
    statistics: StatisticsSlice,
    diagramm: DiagrammDirectionSlice,
  },
});

export default store;
