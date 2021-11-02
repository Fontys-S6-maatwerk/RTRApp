import BaseContext from "./base-context";

export default class UserContext extends BaseContext {
    constructor(){
        super('/user')
    }
    async getById(id) {
        try {
            let response = await this.axios.get('', {
                params: { id: id }
            });
            
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}