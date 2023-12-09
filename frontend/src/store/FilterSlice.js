import { createSlice } from '@reduxjs/toolkit';
import {
  DIRECTION,
  TYPE,
  LEVEL,
  DURATION,
  PRICE,
} from '../constants/filterConstants';

const initialState = {
  primaryFilter: {
    direction: DIRECTION,
  },
  secondaryFilter: {
    type: TYPE,
    level: LEVEL,
    duration: DURATION,
    price: PRICE,
  },
  countFilter: 0,
};

const filterSlice = createSlice({
  name: 'filterCourses',
  initialState,
  reducers: {
    setFilterCounter(state) {
      const defaultKeys = Object.values(initialState.secondaryFilter);
      const currentFilters = Object.values(state.secondaryFilter);
      const countFilter = currentFilters.filter(
        key => !defaultKeys.includes(key),
      );
      state.countFilter = countFilter.length;
    },
    resetFilters(state) {
      state.openedMenus = initialState.openedMenus;
      state.filtredProps.secondaryFilter =
        initialState.secondaryFilter.filtredProps;
    },
    setFilter(state, action) {
      const newFilter = action.payload;
      if (newFilter.direction !== DIRECTION) {
        state.primaryFilter = newFilter.direction;
      }
      const newState = {
        type: newFilter.type || state.secondaryFilter.type,
        level: newFilter.level || state.secondaryFilter.level,
        duration: newFilter.duration || state.secondaryFilter.duration,
        price: newFilter.price || state.secondaryFilter.price,
      };
      state.secondaryFilter = newState;
    },
  },
});
export const { setFilter, resetFilters, setFilterCounter } =
  filterSlice.actions;
export default filterSlice.reducer;
