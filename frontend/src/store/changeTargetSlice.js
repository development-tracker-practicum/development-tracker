import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  values: {
    profession: 'Профессия',
    level: 'Сложность',
  },
  openedMenus: {
    profession: false,
    level: false,
  },
};

const changeTarget = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    openTargetMenu(state, action) {
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
    changeValue(state, action) {
      const { type, id } = action.payload;
      state.values[type] = id;
      state.openedMenus = {
        profession: false,
        level: false,
      };
    },
  },
});

export const { changeValue, openTargetMenu } = changeTarget.actions;
export default changeTarget.reducer;
