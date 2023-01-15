import { AxiosRequestConfig } from "axios";
import { ACCESS_TOKEN_NAME } from "../../config";

const requiredAccessTokenUrlWhiteList = ["/myAccount", "/request", "/pre-create"];

export const accessTokenAuthenticationInterceptor = {
  onFulfilled: (config: AxiosRequestConfig) => {
    const isRequiredAccessTokenUrl = requiredAccessTokenUrlWhiteList.some((whiteListUrl) => {
      return config.url?.includes(whiteListUrl);
    });
    if (isRequiredAccessTokenUrl) {
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
