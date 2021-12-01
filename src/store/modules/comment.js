import CommentService from "@/services/CommentService.js";

export const namespaced = true;

export const state = {
  items: [],
  pageSize: 10,
};

export const mutations = {
  SET_COMMENTS(state, comments) {
    state.items = comments;
  },
  ADD_COMMENT(state, comment) {
    state.items.push(comment);
  },
};

export const actions = {
  fetchSolutionComments({ commit, state }, { solutionId, pageNumber }) {
    CommentService.getSolutionComments(solutionId, pageNumber, state.pageSize)
      .then((response) => {
        commit("SET_COMMENTS", response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  createComment({ commit }, comment) {
    CommentService.postComment(comment)
      .then((response) => {
        commit("ADD_COMMENT", response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
