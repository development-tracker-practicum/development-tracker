import { createSelector, createSlice } from '@reduxjs/toolkit';
import { intialCards } from '../constants/constants';
const initialState = {
  coursesList: intialCards,
  filtredCards: [],
  isFiltredMode: false,
};

const filterCoursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
});
export const freeCourses = createSelector(
  ({ courses }) => courses.coursesList,
  state => state.filter(card => !card.price),
);
// export const {} = filterCoursesSlice.actions;
export default filterCoursesSlice.reducer;
