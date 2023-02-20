import { AxiosRequestConfig } from "axios";
import { ACCESS_TOKEN_NAME } from "../../config";

const requiredAccessTokenUrlWhiteList = ["/my-teams/current-open", "/users/me", "/pre-create"];

export const accessTokenAuthenticationInterceptor = {
  onFulfilled: (config: AxiosRequestConfig) => {
    const isRequiredAccessTokenUrl = requiredAccessTokenUrlWhiteList.some((whiteListUrl) => {
      return config.url?.includes(whiteListUrl);
    });
    console.log(config.url);
    if (isRequiredAccessTokenUrl) {
      const accessTokenFromStorage = localStorage.getItem(ACCESS_TOKEN_NAME);
      if (accessTokenFromStorage) {
        config.headers!.Authorization = `Bearer ${accessTokenFromStorage}`;
        return config;
      }
      return (document.location.href = "/login");
    }
    return config;
  },
  onRejected: (error: unknown) => {
    alert(error);
  },
};
