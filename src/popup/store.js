import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        title: "hello from storage"
    },
    mutations: {
        updateState(state, newTitle) {
            state.title = newTitle;
        }
    },
    actions: {
        updateTitle({commit}, newTitle){
            commit('updateState', newTitle);
        }
    },
  modules: {},
});
