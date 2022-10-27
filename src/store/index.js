import {createLogger, createStore} from 'vuex'
import money from './modules/money';
import study from './modules/study';
import cards from './modules/cards';
import results from './modules/results';

const plugins = [];
if (process.env.NODE_ENV === 'development') {
  plugins.push(createLogger);
}

export default createStore({
  plugins,

  state() {
    return {
      activeStep: 'intro',
      isSoundOn: true,
      sounds: {
        spend: require('@/assets/images/audio/spend.mp3'),
        save: require('@/assets/images/audio/save.mp3'),
      }
    }
  },

  getters: {
    getActiveStep(state) {
      return state.activeStep;
    },

    getIsSoundOn(state) {
      return state.isSoundOn;
    },

    getSounds(state) {
      return state.sounds;
    },
  },

  mutations: {
    changeStep(state, payload) {
      state.activeStep = payload;
    },

    toggleSound(state) {
      state.isSoundOn = !state.isSoundOn;
    },
  },

  modules: {
    money,
    study,
    cards,
    results,
  }
})
