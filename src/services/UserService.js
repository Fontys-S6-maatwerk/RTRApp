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
    async getUserById(id) {
        return await apiClient
            .get("/Users", { params: { id: id } })
            .then((response) => response.data);
    },

    async login(login) {
        return await apiClient
            .get("/Authentication", {
                params: {
                    email: login.email,
                    password: login.password
                }
            })
            .then((response) => response.data);
    },

    async register(register) {
        return await apiClient
            .post('/Authentication', register)
            .then((response) => response.data);
    },


    async delete(id) {
        await apiClient
            .delete('/Authentication/' + id)
            .then((response) => response.data);
    },
};