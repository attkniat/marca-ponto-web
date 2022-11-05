import axios from "axios";

const api = axios.create({
    baseURL: "https://localhost:44328"
});

api.interceptors.request.use(config => {

    const token = localStorage.getItem('jwtToken');

    if(token && config.headers) {
        config.headers.Authorization = `bearer ${token}`
    }

    return config;
    
}, error => Promise.reject(error));

export {api};