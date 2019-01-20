import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favoritePositions: [],
    preload: false
  },
  mutations: {
    addToFavorites (state, positionId) {
      state.favoritePositions.unshift(positionId);
    },
    removeFromFavorites (state, index) {
      state.favoritePositions.splice(index, 1);
    },
    preload (state, boolean) {
      state.preload = boolean;
    }
  },
  actions: {
    addToFavorites (context, positionId) {
      if (!context.state.favoritePositions.includes(positionId)) {
        context.commit('addToFavorites', positionId);
      }
    },
    removeFromFavorites (context, positionId) {
      const foundIndex = context.state.favoritePositions.indexOf(positionId);
      if (foundIndex > -1) {
        context.commit('removeFromFavorites', foundIndex);
      }
    },
    preload (context, boolean) {
      context.commit('preload', boolean);
      if (!boolean) {
        var scrollingElement = document.scrollingElement || document.documentElement;
        scrollingElement.scrollTop = 0;
      }
    }
  },
  getters: {
    isFavorite (state) {
      return (positionId) => {
        return state.favoritePositions.includes(positionId);
      };
    }
  }
});