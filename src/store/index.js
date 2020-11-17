import { createStore } from 'vuex';
import stepModule from './steps/index';
import resultMessageModule from './resultMessage/index';
import timeModule from './time/index';
import cardsModule from './cards/index';

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    stepModule,
    resultMessageModule,
    timeModule,
    cardsModule,
  },
});
