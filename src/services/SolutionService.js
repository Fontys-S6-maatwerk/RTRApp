import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  async getFeedSolutions(userId, sortBy, pageNumber, pageSize) {
    console.log("TEMP API CALL FEED: ", userId, sortBy, pageNumber, pageSize);
    return await apiClient.get("/Solutions").then((response) => response.data);
  },
  async getSolutionById(id) {
    return await apiClient
      .get("/Solutions/" + id)
      .then((response) => response.data);
  },
  async getSearchSolutions(
    query,
    weatherExtremeType,
    sortBy,
    pageNumber,
    pageSize
  ) {
    console.log(
      "TEMP API CALL SEARCH: ",
      query,
      weatherExtremeType,
      sortBy,
      pageNumber,
      pageSize
    );
    return await apiClient.get("/Solutions").then((response) => response.data);
  },
};
