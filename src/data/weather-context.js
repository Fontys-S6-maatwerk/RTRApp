import BaseContext from "./base-context";

export default class SolutionContext extends BaseContext {
    constructor() {
        super('/Weather')
    }

    async getWeatherExtremes() {

        try {
            let response = await this.axios.get();

            return response.data.WeatherExtremes;

        } catch (error) {
            console.error(error);
        }
    }
}