import apiClient from "@/util/api-client";

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


    async update(user) {
        return await apiClient
            .patch('/Users/' + user.id, user)
            .then((response) => response.data);
    },


    async delete(id) {
        await apiClient
            .delete('/Authentication/' + id)
            .then((response) => response.data);
    },
};