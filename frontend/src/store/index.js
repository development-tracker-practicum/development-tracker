import { configureStore } from '@reduxjs/toolkit';
import filterCoursesSlice from './filterCoursesSlice';
import coursesSlice from './coursesSlice';
import userSlice from './userSlice';
const store = configureStore({
  reducer: {
    filterCourses: filterCoursesSlice,
    courses: coursesSlice,
    user: userSlice,
  },
});

export default store;
