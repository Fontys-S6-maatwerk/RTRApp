import apiClient from "@/util/api-client";

export default {
    async getSolutionComments(solutionId, pageNumber, pageSize) {
        console.log("TEMP API CALL COMMENTS: ", solutionId, pageNumber, pageSize);
        return await apiClient
            .get("/comments/solutions/" + solutionId, {
                params: {
                    pageNumber: pageNumber,
                    pageSize: pageSize
                }
            })
            .then((response) => response.data);
    },
    async postComment(comment) {
        return await apiClient
            .post("/comments", comment)
            .then((response) => response.data);
    },
};