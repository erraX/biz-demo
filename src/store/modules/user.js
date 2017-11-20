export default {
  state: {
    info: {
      username: '',
    },
  },

  mutations: {
    SET_INFO: (state, info) => {
      state.info = info;
    }
  },

  actions: {
    SET_INFO({
      commit
    }, info) {
      commit('SET_INFO', info);
    },
  },

  getters: {
    user: state => state.user,
  },
};