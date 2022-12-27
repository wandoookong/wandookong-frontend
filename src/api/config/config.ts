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

// requester.interceptors.response.use(
//   (response) => response.data,
//   (error) => {
//     if (error.response?.status === 401) {
//       console.log("auth error");
//       return (window.location.href = "/login");
//     }
//     alert(error.response?.data?.message ?? "잠시 후 다시 시도해주세요");
//     console.log(error.response?.data);
//   },
// );

export default requester;
