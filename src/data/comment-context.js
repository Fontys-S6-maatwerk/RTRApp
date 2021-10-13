import BaseContext from "./base-context";

export default class CommentContext extends BaseContext {
    constructor() {
        super('/comments')
    }

    async all() {
        try {
            let response = await this.axios.get();

            return response.data;

        } catch (error) {
            console.error(error);
        }
    }
    async postComment(comment) {
        try {
            let response = await this.axios.post(comment);

            return response.data;

        } catch (error) {
            console.error(error);
        }
    }
}