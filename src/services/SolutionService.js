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
  async getFeedSolutions(
    userId,
    sortBy,
    ascending,
    sectionNumber,
    sectionSize
  ) {
    console.log(userId, sortBy, ascending, sectionNumber, sectionSize);
    return await apiClient.get("/Solutions").then((response) => response.data);
  },
  async getSolutionById(id) {
    return await apiClient
      .get("/Solutions/" + id)
      .then((response) => response.data);
  },
};
