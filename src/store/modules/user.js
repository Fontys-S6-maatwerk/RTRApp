import UserService from "@/services/UserService.js";

export const namespaced = true;

export const state = {
  currentUser: {
    id: "49b8e447-b3b5-413e-950d-fd63ac50aac5",
    firstname: "Test",
    lastname: "User",
    profileImage: "https://cdn.vuetifyjs.com/images/john.jpg",
    email: "test.user@gmail.com",
  },
  user: {},
};

export const mutations = {
  SET_USER(state, user) {
    state.user = user;
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
