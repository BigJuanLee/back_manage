import axios from 'axios';
import {
    showLoading,
    hideLoading
} from "../loading/loading";
import siteinfo from "../../../siteinfo";
const service = axios.create({
    baseURL: siteinfo["domain"],
    timeout: 5000,
    responseType: "json",
    withCredentials: true, // 是否允许带cookie这些
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    }
})

service.interceptors.request.use(res => {
    showLoading();
    return res
}, err => Promise.reject(err));



service.interceptors.response.use(res => {
    hideLoading();
    if (res.status === 200) {
        // if (res.data.status !== "1") {
        //     return Promise.reject(res.data.message);
        // }
        return Promise.resolve(res);
    } else {
        return Promise.reject(res)
    }
}, err => Promise.reject(err))

export default service;