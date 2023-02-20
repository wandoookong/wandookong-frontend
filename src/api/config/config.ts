import axios from "axios";
import { accessTokenAuthenticationInterceptor } from "./interceptors/request/accessTokenAuthenticationInterceptor";
import { ErrorHandlingInterceptor } from "./interceptors/response/errorHandlingInterceptor";

export const API_HOST_NAME = "https://api.wandookongproject.com";
export const ACCESS_TOKEN_NAME = "w_d_k_t";

const requester = axios.create({
  baseURL: API_HOST_NAME,
  timeout: 5000,
});

requester.interceptors.request.use(
  accessTokenAuthenticationInterceptor.onFulfilled,
  accessTokenAuthenticationInterceptor.onRejected,
);

requester.interceptors.response.use(ErrorHandlingInterceptor.onFulfilled, ErrorHandlingInterceptor.onRejected);

export default requester;
