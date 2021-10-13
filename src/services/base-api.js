import axios from 'axios';

export default class BaseApi {

    constructor(contextPath) {
        this.contextPath = contextPath;

        let isDevelopment = process.env.NODE_ENV === 'development';
        if (isDevelopment) {
            this.baseURL = process.env.VUE_APP_BASE_URL;
        }
    }

    createService() {
        let headers = {
            'cache-control': 'no-cache'
        }

        return axios.create({
            baseURL: this.baseUrl + this.contextPath,
            headers: headers,
        });
    }
}