import { AxiosRequestConfig } from "axios";
import { ACCESS_TOKEN_NAME } from "../../config";

export const accessTokenAuthenticationInterceptor = {
  onFulfilled: (config: AxiosRequestConfig) => {
    const accessTokenFromStorage = localStorage.getItem(ACCESS_TOKEN_NAME);
    if (accessTokenFromStorage) {
      config.headers!.Authorization = `Bearer ${accessTokenFromStorage}`;
    } else if (window.location.href === "/") {
      return (document.location.href = "/login");
    }
    return config;
  },
  onRejected: (error: unknown) => {
    alert(error);
  },
};
