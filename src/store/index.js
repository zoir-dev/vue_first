import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    add(state) {
      state.counter++;
    },
    decrease(state) {
      state.counter--;
    },
  },
});
export default { store };
