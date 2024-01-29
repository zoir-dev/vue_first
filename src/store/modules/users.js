const state = {
  users: [],
  user: {},
  loading: false,
  page: 1,
  totalPage: 1,
};

const mutations = {
  setUsers(state, users) {
    state.users = users;
  },
  setUser(state, user) {
    state.user = user;
  },
  setLoading(state, loading) {
    state.loading = loading;
  },
  setCurrentPage(state, page) {
    if (page > 0 && page <= state.totalPage[state.totalPage.length - 1]) {
      state.page = page;
    }
  },
  setTotalPage(state, pages) {
    state.totalPage = pages;
  },
};

const actions = {
  async fetchUsers({ commit }) {
    commit("setLoading", true);
    try {
      const res = await fetch(
        `https://dummyjson.com/users?limit=10&skip=${(state.page - 1) * 10}`
      ).then((res) => res.json());
      commit("setUsers", res.users);
      commit(
        "setTotalPage",
        Array.from({ length: Math.ceil(res.total / 10) }, (_, i) => i + 1)
      );
    } catch (error) {
      console.log(error.message);
    } finally {
      commit("setLoading", false);
    }
  },
  async fetchUser({ commit }, id) {
    commit("setLoading", true);
    try {
      const res = await fetch(`https://dummyjson.com/users/${id}`).then((res) =>
        res.json()
      );
      commit("setUser", res);
    } catch (error) {
      console.log(error.message);
    } finally {
      commit("setLoading", false);
    }
  },
  setPage({ commit }, page) {
    commit("setCurrentPage", page);
  },
};

const getters = {
  getUsers: (state) => state.users,
  getUser: (state) => state.user,
  isLoading: (state) => state.loading,
  getCurrentPage: (state) => state.page,
  getTotalPage: (state) => state.totalPage,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
