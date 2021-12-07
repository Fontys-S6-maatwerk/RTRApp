import apiClient from "@/util/api-client";

export default {
    async getSolutionComments(solutionId, pageNumber, pageSize) {
        console.log("TEMP API CALL COMMENTS: ", solutionId, pageNumber, pageSize);
        return await apiClient.get("/Comments").then((response) => response.data);
    },
    async postComment(comment) {
        return await apiClient
            .post("/Comments", comment)
            .then((response) => response.data);
    },
};