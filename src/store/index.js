import { createStore } from 'vuex';
import stepModule from './steps/index';
import resultMessageModule from './resultMessage/index';
import timeModule from './time/index';

export default createStore({
  state: {
    cardsWithNumbers: [
      {
        id: 0,
        value: 1,
        disable: '',
      },
      {
        id: 1,
        value: 2,
        disable: '',
      },
      {
        id: 2,
        value: 3,
        disable: '',
      },
      {
        id: 3,
        value: 4,
        disable: '',
      },
      {
        id: 4,
        value: 5,
        disable: '',
      },
      {
        id: 5,
        value: 6,
        disable: '',
      },
      {
        id: 6,
        value: 3,
        disable: '',
      },
      {
        id: 7,
        value: 2,
        disable: '',
      },
      {
        id: 8,
        value: 4,
        disable: '',
      },
      {
        id: 9,
        value: 1,
        disable: '',
      },
      {
        id: 10,
        value: 5,
        disable: '',
      },
      {
        id: 11,
        value: 6,
        disable: '',
      },
    ],
  },
  getters: {
    getCardsWithNumbers(state) {
      return state.cardsWithNumbers;
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    stepModule,
    resultMessageModule,
    timeModule,
  },
});
