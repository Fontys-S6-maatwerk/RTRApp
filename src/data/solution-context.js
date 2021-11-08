import BaseContext from "./base-context";

export default class SolutionContext extends BaseContext {
    constructor() {
        super('/Solutions')
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

    async getByAuthor(author) {

        try {
            let response = await this.axios.get('', {
                params: { author: author }
            });

            return response.data;

        } catch (error) {
            console.error(error);
        }
    }

    async add(solution) {

        try {
            let response = await this.axios.post('', solution);

            return response.data;

        } catch (error) {
            console.error(error);
        }
    }

    async update(solution) {

        try {
            let response = await this.axios.put(`/${solution.id}`, solution);

            return response.data;

        } catch (error) {
            console.error(error);
        }
    }

    async delete(solutionId) {

        try {
            let response = await this.axios.delete(`/${solutionId}`);

            return response.data;

        } catch (error) {
            console.error(error);
        }
    }
    
    async search(query, sectionNumber, sectionSize, weatherExtremeType, solutionType, sortBy, ascending) {
        try {
            let response = await this.axios.get('', {
                params: { 
                    query: query,
                    sectionNumber: sectionNumber,
                    sectionSize: sectionSize,
                    weatherExtremeType: weatherExtremeType,
                    solutionType: solutionType,
                    sortBy: sortBy,
                    ascending: ascending
                }
            });

            return response.data;
            
        } catch (error) {
            console.error(error);
        }
    }
}