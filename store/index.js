const store = {
  state: {
    counter: 3,
    comments: [],
    sortComments: "asc",
  },
  getters: {
    getCounter: (state) => state.counter,
    comments: (state) => state.comments,
    getCurrentComment: (state) => state.comments,
  },
  actions: {
    getComments({ commit }) {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((response) => response.json())
        .then((data) => commit("setComments", data))
        .catch((err) => console.error(err));
    },

    sortById({ commit }) {
      commit("setSortById");
    },

  },
  mutations: {
    setComments(state, data) {
      state.comments = data;
    },

    setSortById(state) {
      if (state.sortComments === "asc") {
        state.sortComments = "desc";
        state.comments = state.comments.sort((a, b) => {
            return b.id - a.id;
        });
      } else {
        state.sortComments = "asc";
        state.comments = state.comments.sort((a, b) => {
          return a.id - b.id;
        });
      }
    },
  },
};

export default store;