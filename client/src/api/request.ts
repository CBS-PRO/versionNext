import axios from "axios";
import AxiosPromise from "axios";
import $AxiosXHR from "axios";
import addInterceptor from "./axiosInterceptor";

addInterceptor(axios);

export const del = axios.delete;
export const get = axios.get;
export const post = axios.post;
export const put = axios.put;
export const patch = axios.patch;

export const Result = AxiosPromise;
export const Response = $AxiosXHR;

export default axios;
