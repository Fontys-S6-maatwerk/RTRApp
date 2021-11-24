import BaseContext from "./base-context";

export default class AuthenticationContext extends BaseContext {
    constructor() {
        super("/Authentication");
    }

    async login(email, password) {
        try {
            let response = await this.axios.get('', {
                params: {
                    email: email,
                    password: password
                }
            });

            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    async all() {
        try {
            let response = await this.axios.get("");

            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    async delete(accountId) {
        try {
            let response = await this.axios.delete(`/${accountId}`);

            return response.data;

        } catch (error) {
            console.error(error);
        }
    }
}