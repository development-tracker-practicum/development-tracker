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
  reducers: {
    setFiltredListLevel(state, action) {
      const level = action.payload;
      const filtredList = state.list
    },
    setFiltredListDuration(state, action) {
      const duration = parseInt(action.payload);
      let filtredList = [];
      if (duration === 5) {
        filtredList = state.list.filter(
          card => card.duration >= 5 && card.duration <= 20,
        );
      }
      if (duration === 20) {
        filtredList = state.list.filter(
          card => card.duration >= 20 && card.duration <= 40,
        );
      }
      if (duration === 60) {
        filtredList = state.list.filter(card => card.duration >= 60);
      }
      state.filtredList = [...state.filtredList, filtredList];
    },
    setFiltredListPrice(state, action) {
      const price = action.payload;
      const isItDefault = price === 'Стоимость';
      let filtredList = [];
      if (isItDefault) {
        return;
      }
      const isMorePrice = price[0] === '>' && true;
      if (isMorePrice) {
        filtredList = state.list.filter(({ price }) => price >= 1000);
      }

      const isLessPrice = price[0] === '<' && true;
      if (isLessPrice) {
        filtredList = state.list.filter(({ price }) => price <= 1000);
      }
      const isFree = price === 'Бесплатно';
      if (isFree) {
        filtredList = state.list.filter(({ price }) => price === 'Бесплатно');
        state.filtredList = [...state.filtredList, filtredList];
      }
    },
  },
});

export const { setFiltredListPrice, setFiltredListDuration } =
  recommendationListSilce.actions;
export default recommendationListSilce.reducer;
