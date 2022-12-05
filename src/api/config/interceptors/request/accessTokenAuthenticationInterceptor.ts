import { AxiosRequestConfig } from "axios";
import { ACCESS_TOKEN_NAME } from "../../config";

const requiredAccessTokenUrlWhiteList = ["/myAccount", "/request", `/team/:teamId/apply`];

export const accessTokenAuthenticationInterceptor = {
  onFulfilled: (config: AxiosRequestConfig) => {
    if (config.url && requiredAccessTokenUrlWhiteList.includes(config.url)) {
      const accessTokenFromStorage = localStorage.getItem(ACCESS_TOKEN_NAME);
      if (!accessTokenFromStorage) {
        return (document.location.href = "/login");
      }
    }
    return config;
  },
  onRejected: (error: unknown) => {
    throw error;
  },
};
