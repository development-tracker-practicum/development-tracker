import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activePeaceDirection: '',
};

const DiagrammDirectionSlice = createSlice({
  name: 'diagrammDirection',
  initialState,
  reducers: (builder) => {
    builder.addCase(setActivePeace, (state, action) => {
      state.activePeaceDirection = action.payload || state.activePeaceDirection;
    });
  },
});

export const { setActivePeace } = DiagrammDirectionSlice.actions;
export default DiagrammDirectionSlice.reducer;
