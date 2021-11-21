import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://localhost:5004`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  async getSolutionComments(solutionId, pageNumber, pageSize) {
    console.log("TEMP API CALL COMMENTS: ", solutionId, pageNumber, pageSize);
    return await apiClient
      .get(
        "/comments/solutions/" +
          solutionId +
          "?pageNumber=" +
          pageNumber +
          "&pageSize=" +
          pageSize
      )
      .then((response) => response.data);
  },
  async postComment(comment) {
    return await apiClient
      .post("/comments", comment)
      .then((response) => response.data);
  },
};
