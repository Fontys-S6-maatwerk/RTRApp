import BaseContext from "./base-context";

export default class UserContext extends BaseContext {
    constructor() {
        super('/Users')
    }

    async all() {

        try {
            let response = await this.axios.get('');

            return response.data;

        } catch (error) {
            console.error(error);
        }
    }

    async getById(id) {

        try {
            let response = await this.axios.get('', {
                params: { id: id }
            });
            return response.data;

        } catch (error) {
            console.error(error);
        }
    }
}