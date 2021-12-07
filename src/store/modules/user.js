import UserService from "@/services/UserService.js";

export const namespaced = true;

export const state = {
  currentUser: {

  },
  user: {},
};

export const mutations = {
    SET_USER(state, user) {
        state.user = user;
    },
    SET_CURRENT_USER(state, user) {
        state.currentUser = user;
    },
};

export const actions = {
    fetchUser({ commit }, id) {
        UserService.getUserById(id)
            .then((response) => {
                //returns array with user
                let user = response[0];
                commit("SET_USER", user);
            })
            .catch((error) => {
                console.log(error);
            });
    },

    fetchCurrentUser({ commit }, id) {
        UserService.getUserById(id)
            .then((response) => {
                commit("SET_CURRENT_USER", response);
            })
            .catch((error) => {
                console.log(error);
            });
    },

    loginUser({ commit }, login) {
        return UserService.login(login)
            .then((response) => {
                let user = response[0];
                //returns array with user
                commit("SET_CURRENT_USER", user);
                return user;
            })
            .catch((error) => {
                console.log(error);
            });
    },

    registerUser({ commit }, register) {
        return UserService.register(register)
            .then((response) => {
                commit("SET_CURRENT_USER", response);
                return response;
            })
            .catch((error) => {
                console.log(error);
            });
    },

    logoutUser({ commit }) {
        commit("SET_CURRENT_USER", {});
    },

    deleteUser({ commit }, id) {
        UserService.delete(id)
            .then(() => {
                commit("SET_CURRENT_USER", {});
            })
            .catch((error) => {
                console.log(error);
            })
    },
};