import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'pick',
  currentProfession: 'UI/UX Дизайнер',
  currentLevel: 'Junior',
};

const changeTarget = createSlice({
  name: 'changeTarget',
  initialState,
  reducers: {
    pickTarget(state, action) {
      const { level, profession } = action.payload;
      state.mode = 'changed';
      state.currentLevel = level || state.currentLevel;
      state.currentProfession = profession || state.currentLevel;
    },
  },
});

export const { pickTarget } = changeTarget.actions;
export default changeTarget.reducer;
