import apiClient from "@/util/api-client";

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
        return await apiClient.get("/Solutions", {
            params: {
                query: query,
                weatherExtremeType: weatherExtremeType,
                sortBy: sortBy,
                pageNumber: pageNumber,
                pageSize: pageSize
            }
        }).then((response) => response.data);
    },
    async getUserSolutions(userId, pageNumber, pageSize) {
        console.log("TEMP API CALL USER SOL: ", userId, pageNumber, pageSize);
        return await apiClient.get("/Solutions", {
            params: {
                userId: userId
            }
        }).then((response) => response.data);
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
        return await apiClient.delete("/Solutions/" + id);
    },
    async addImpact(id, impact) {
        return await apiClient.patch("/Solutions/" + id, {
            params: {
                impact: impact
            }
        });
    },
    async likeSolution(solution) {
        return await apiClient.patch(`/solutions/${solution.id}`, solution);
    },
    async getUserLikedSolutions(userId, pageNumber, pageSize) {
        console.log("TEMP API CALL USER LIKED SOLULTION: ", userId, pageNumber, pageSize);
        return await apiClient.get("/solutions", {
            params: {
                isLiked: true
            }
        }).then((response) => response.data)
    }
};