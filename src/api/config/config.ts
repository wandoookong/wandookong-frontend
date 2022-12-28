import axios from "axios";
import { accessTokenAuthenticationInterceptor } from "./interceptors/request/accessTokenAuthenticationInterceptor";

export const HOST_NAME = "https://api.wandookongproject.com";
export const ACCESS_TOKEN_NAME = "w_d_k_t";

const getToken = () => localStorage.getItem(ACCESS_TOKEN_NAME);

const requester = axios.create({
  baseURL: HOST_NAME,
  timeout: 5000,
  headers: getToken() ? { Authorization: `Bearer ${getToken()}` } : undefined,
});

requester.interceptors.request.use(
  accessTokenAuthenticationInterceptor.onFulfilled,
  accessTokenAuthenticationInterceptor.onRejected,
);

export default requester;
