import BaseApi from "@/services/base-api";
/**
 * @abstract
 */
export default class BaseContext {
    constructor(basePath) {
        if (this.constructor === BaseContext) {
            throw new Error('Cannot instantiate BaseContext class');
        }
        if (!basePath.startsWith('/')) {
            throw new Error(`Context basePath must start with a / : ${basePath}`);
        }
        this.axios = new BaseApi(basePath).createService();
    }

    async add(item) {
        try {
            let response = await this.axios
                .post('/add', item);

            return response.data;

        } catch (error) {
            console.error(error);
        }
    }

    async update(item) {

        try {
            let response = await this.axios
                .put('/update', item);

            return response.data;

        } catch (error) {
            console.error(error);
        }
    }

    async delete(itemId) {
        try {
            let response = await this.axios
                .delete('/delete', {
                    params: { id: itemId }
                });

            return response.data;

        } catch (error) {
            console.error(error);
        }
    }

    async getById(id) {
        try {
            let response = await this.axios
                .get('/getById', {
                    params: { id: id }
                });

            return response.data;

        } catch (error) {
            console.error(error);
        }
    }
}