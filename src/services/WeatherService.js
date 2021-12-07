import apiClient from "@/util/api-client";

export default {
    async getWeatherExtremes() {
        return await apiClient.get("/Weather").then((response) => response.data);
    },
};