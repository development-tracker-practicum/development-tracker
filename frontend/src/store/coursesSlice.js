import { createSlice } from '@reduxjs/toolkit';
import { initialCards } from '../constants/constants';

const initialState = initialCards;

const filterCoursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
});
export const {} = filterCoursesSlice.actions;
export default filterCoursesSlice.reducer;
