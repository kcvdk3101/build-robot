import axios from "axios";

export default {
  namespaced: true,
  state: {
    user: null,
  },
  mutations: {
    updateCurrentUser(state, user) {
      state.user = user;
    },
  },
  getters: {},
  actions: {
    signIn({ commit }) {
      axios
        .post("http://127.0.0.1:8081/api/sign-in")
        .then((result) => commit("updateCurrentUser", result.data))
        .catch(console.error);
    },
  },
};
