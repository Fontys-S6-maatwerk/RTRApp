import WeatherService from "@/services/WeatherService.js";

export const namespaced = true;

export const state = {
  weatherExtremes: [],
};

export const mutations = {
  SET_WEATHER_EXTREMES(state, weatherExtremes) {
    state.weatherExtremes = weatherExtremes;
  },
};

export const actions = {
  fetchWeatherExtremes({ commit }) {
    WeatherService.getWeatherExtremes()
      .then((response) => {
        commit("SET_WEATHER_EXTREMES", response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
