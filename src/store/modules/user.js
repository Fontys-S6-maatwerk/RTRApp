import UserService from "@/services/UserService.js";

export const namespaced = true;

export const state = {
  currentUser: {
    id: "61dd5018-93f2-420f-8211-34c1766f2d54",
    firstname: "Jan",
    lastname: "Janssen",
    profileImage: "https://cdn.vuetifyjs.com/images/john.jpg",
    email: "JanJanssen@email.com",
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
        commit("SET_USER", response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
