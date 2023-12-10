import { createSlice } from '@reduxjs/toolkit';
import { recommendationList } from '../constants/recomendationsConstants';
const initialState = {
  list: recommendationList,
  mode: 'initial',
  filtredList: [],
};

const recommendationListSilce = createSlice({
  name: 'recommendations',
  initialState,
  reducers: {},
});

export const { setFiltredListPrice, setFiltredListDuration } =
  recommendationListSilce.actions;
export default recommendationListSilce.reducer;
