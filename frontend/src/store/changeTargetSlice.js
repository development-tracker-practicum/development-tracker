import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'pick',
  currentProfession: 'UI/UX Дизайнер',
  currentLevel: 'Junior',
};

const changeTarget = createSlice({
  name: 'changeTarget',
  initialState,
  reducers: (builder) => {
    builder.addCase(pickTarget, (state, action) => {
      const newTarget = action.payload;
      state.currentProfession = newTarget.profession || state.currentProfession;
      state.currentLevel = newTarget.level || state.currentLevel;
      state.mode = 'change';
    });
  },
});

export const { changeValue, openTargetMenu } = changeTarget.actions;
export default changeTarget.reducer;
