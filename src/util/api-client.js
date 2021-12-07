import axios from 'axios';

const ApiClient = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    withCredentials: false, // This is the default
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export default ApiClient;