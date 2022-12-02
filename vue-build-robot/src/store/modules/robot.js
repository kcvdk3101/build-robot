import axios from "axios";

export default {
  namespaced: true,
  state: {
    cart: [],
    parts: null,
  },
  mutations: {
    addRobotToCart(state, payload) {
      state.cart.push(payload);
    },
    updateParts(state, payload) {
      state.parts = payload;
    },
  },
  actions: {
    getParts({ commit }) {
      axios
        .get("http://localhost:8081/api/parts")
        .then((response) => commit("updateParts", response.data))
        .catch(console.error);
    },
    addRobotToCart({ commit, state }, robot) {
      const newCart = [...state.cart, robot];
      return axios
        .post("http://localhost:8081/api/cart", newCart)
        .then(() => commit("addRobotToCart", robot));
    },
  },
  getters: {
    cartSavedMoney(state) {
      return state.cart.filter((item) => item.head.onSale);
    },
  },
};
