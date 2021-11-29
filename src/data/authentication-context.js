import BaseContext from "./base-context";

export default class AuthenticationContext extends BaseContext {
    constructor() {
        super("/Authentication");
    }

    async login(login) {
        try {
            let response = await this.axios.get('', {
                params: {
                    email: login.email,
                    password: login.password
                }
            });

            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    async register(register) {
        try {
            let response = await this.axios.post('', register);

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