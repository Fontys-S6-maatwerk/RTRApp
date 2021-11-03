import SolutionService from "@/services/SolutionService.js";

export const namespaced = true;

export const state = {
  items: [],
  solution: {},
  sectionSize: 20,
};

export const mutations = {
  SET_SOLUTIONS(state, solutions) {
    state.items = solutions;
  },
};

export const actions = {
  fetchFeedSolutions(
    { state, commit },
    { id, sortBy, ascending, sectionNumber }
  ) {
    SolutionService.getFeedSolutions(
      id,
      sortBy,
      ascending,
      sectionNumber,
      state.sectionSize
    )
      .then((response) => {
        commit("SET_SOLUTIONS", response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  fetchSolution({ commit, getters }, id) {
    var solution = getters.getSolutionById(id);
    console.log("cwen")
    if (solution) {
      console.log("yay")
      commit("SET_SOLUTION", solution);
    } else {
      SolutionService.getSolutionById(id)
        .then((response) => {
          commit("SET_SOLUTION", response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
};

export const getters = {
  getSolutionById: (state) => (id) => {
    return state.items.find((solution) => solution.id === id);
  },
};
