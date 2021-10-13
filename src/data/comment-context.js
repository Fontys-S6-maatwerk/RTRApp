import BaseContext from "./base-context";

export default class CommentContext extends BaseContext {
    constructor() {
        super('/Comment')
    }

    async all() {
        try {
            let response = await this.axios.get('/all');

            return response.data;

        } catch (error) {
            console.error(error);
        }
    }
}