import { createSlice } from '@reduxjs/toolkit';
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
// export const {} = filterCoursesSlice.actions;
export default filterCoursesSlice.reducer;
