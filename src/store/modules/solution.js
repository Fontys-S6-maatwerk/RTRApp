import SolutionService from "@/services/SolutionService.js";

export const namespaced = true;

export const state = {
    feedSolutions: [],
    searchSolutions: [],
    userSolutions: [],
    solution: {},
    pageSize: 20,
};

export const mutations = {
    SET_FEED_SOLUTIONS(state, solutions) {
        state.feedSolutions = solutions;
    },
    SET_SEARCH_SOLUTIONS(state, solutions) {
        state.searchSolutions = solutions;
    },
    SET_USER_SOLUTIONS(state, solutions) {
        state.userSolutions = solutions;
    },
    SET_USER_LIKED_SOLUTIONS(state, solutions) {
        state.userSolutions = solutions;
    },
    SET_SOLUTION(state, solution) {
        state.solution = solution;
    },
    REMOVE_SOLUTION(state, solution) {
        const index = state.userSolutions.indexOf(solution);
        state.userSolutions.splice(index, 1);
    },
    ADD_IMPACT(state, impact) {
        state.solution.currentImpact += Number(impact);
    },
};

export const actions = {
    fetchFeedSolutions({ state, commit }, { userId, sortBy, pageNumber }) {
        SolutionService.getFeedSolutions(userId, sortBy, pageNumber, state.pageSize)
            .then((response) => {
                commit("SET_FEED_SOLUTIONS", response);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    fetchSearchSolutions({ state, commit }, { query, pageNumber, weatherExtreme, sortBy }) {
        SolutionService.getSearchSolutions(
                query,
                weatherExtreme,
                sortBy,
                pageNumber,
                state.pageSize
            )
            .then((response) => {
                commit("SET_SEARCH_SOLUTIONS", response);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    fetchUserSolutions({ commit }, { id, pageNumber }) {
        SolutionService.getUserSolutions(id, pageNumber, state.pageSize)
            .then((response) => {
                commit("SET_USER_SOLUTIONS", response);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    fetchSolution({ commit }, id) {
        return SolutionService.getSolutionById(id)
            .then((response) => {
                commit("SET_SOLUTION", response);
                return response;
            })
            .catch((error) => {
                console.log(error);
            });
    },
    createSolution({ commit }, solution) {
        return SolutionService.postSolution(solution)
            .then((response) => {
                commit("SET_SOLUTION", response);
                return response;
            })
            .catch((error) => {
                console.log(error);
            });
    },
    updateSolution({ commit }, { id, solution }) {
        return SolutionService.putSolution(id, solution)
            .then((response) => {
                commit("SET_SOLUTION", response);
                return response;
            })
            .catch((error) => {
                console.log(error);
            });
    },
    deleteSolution({ commit }, solution) {
        SolutionService.deleteSolution(solution.id)
            .then(() => {
                commit("REMOVE_SOLUTION", solution);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    addImpact({ commit }, { id, impact }) {
        SolutionService.addImpact(id, impact)
            .then(() => {
                commit("ADD_IMPACT", impact);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    toggleSolutionLike({ commit }, { solution }) {
        SolutionService.likeSolution(solution).then(() => {
            commit("SET_SOLUTION", solution);
        }).catch((error) => {
            console.log(error);
        });
    },
    fetchUserLikedSolutions({ commit }, { id, pageNumber }) {
        SolutionService.getUserLikedSolutions(id, pageNumber, state.pageSize)
            .then((response) => {
                commit("SET_USER_LIKED_SOLUTIONS", response);
            })
            .catch((error) => {
                console.log(error);
            });
    },
};

export const getters = {};