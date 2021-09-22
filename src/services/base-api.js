import axios from 'axios';
import DevHost from './dev-host';

export default class BaseApi {

    constructor(contextPath) {
        this.contextPath = contextPath;

        let isDevelopment = process.env.NODE_ENV === 'development';
        if (isDevelopment) {
            const host = new DevHost(5045); //gateway port
            this.baseUrl = `http://${host.ip}:${host.port}`;
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