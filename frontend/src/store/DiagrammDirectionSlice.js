import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activePeaceDirection: '',
};

const DiagrammDirectionSlice = createSlice({
  name: 'diagrammDirection',
  initialState,
  reducers: {
    setActivePeace(state, action) {
      state.activePeaceDirection =
        action.payload === state.activePeaceDirection ? '' : action.payload;
    },
  },
});

export const { setActivePeace } = DiagrammDirectionSlice.actions;
export default DiagrammDirectionSlice.reducer;
