import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filtredProps: {
    type: 'Тип',
    difficult: 'Сложность',
    duration: 'Длительность',
    price: 'Стоимость',
  },
  openedMenus: {
    type: false,
    difficult: false,
    duration: false,
    price: false,
  },
};

const filterCoursesSlice = createSlice({
  name: 'filterCourses',
  initialState,
  reducers: {
    closeAllMenus() {
      state.openedMenus = {
        type: false,
        difficult: false,
        duration: false,
        price: false,
      };
    },
    resetFilters(state) {
      state.openedMenus = initialState.openedMenus;
      state.filtredProps = initialState.filtredProps;
    },
    openMenu(state, action) {
      const id = action.payload;
      const menusStateArray = Object.entries(state.openedMenus);
      const menusStateArrayWithOpenedMenu = menusStateArray.map(
        ([key, value]) => (key === id ? [key, !value] : [key, false]),
      );
      const newState = menusStateArrayWithOpenedMenu.reduce(
        (acc, [key, value]) => {
          acc[key] = value;
          return acc;
        },
        {},
      );
      state.openedMenus = newState;
    },
    changeFilter(state, action) {
      const { type, id } = action.payload;
      state.filtredProps[type] = id;
      state.openedMenus = {
        type: false,
        difficult: false,
        duration: false,
        price: false,
      };
    },
  },
});

export const { changeFilter, closeAllMenus, openMenu, resetFilters } =
  filterCoursesSlice.actions;
export default filterCoursesSlice.reducer;
