import Vue from "vue";
import Vuex from "vuex";
import * as user from "@/store/modules/user.js";
import * as solution from "@/store/modules/solution.js";
import * as comment from "@/store/modules/comment.js";
import * as weather from "@/store/modules/weather.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    solution,
    comment,
    weather,
  },
});
