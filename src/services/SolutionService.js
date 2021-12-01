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
    async getUserSolutions(userId, pageNumber, pageSize) {
        console.log("TEMP API CALL USER SOL: ", userId, pageNumber, pageSize);
        return await apiClient.get("/Solutions").then((response) => response.data);
    },
    async postSolution(solution) {
        return await apiClient
            .post("/Solutions", solution)
            .then((response) => response.data);
    },
    async putSolution(id, solution) {
        return await apiClient
            .put("/Solutions/" + id, solution)
            .then((response) => response.data);
    },
    async deleteSolution(id) {
        return await apiClient.delete("/solutions/" + id);
    },
    async addImpact(id, impact) {
        return await apiClient.patch("/solutions/" + id + "?currentImpact=" + impact);
    },
    async likeSolution(solution) {
        return await apiClient.patch(`/solutions/${solution.id}`, solution);
    },
    async getUserLikedSolutions(userId, pageNumber, pageSize) {
        console.log("TEMP API CALL USER LIKED SOLULTION: ", userId, pageNumber, pageSize);
        return await apiClient.get("/solutions/?isLiked=true").then((response) => response.data)
    }
};