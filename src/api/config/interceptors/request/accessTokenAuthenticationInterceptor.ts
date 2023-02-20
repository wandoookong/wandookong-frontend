import { AxiosRequestConfig } from "axios";
import { ACCESS_TOKEN_NAME } from "../../config";

const requiredAccessTokenUrlWhiteList = [
  "/my-teams/current-open",
  "/users/me",
  "/pre-create",
  "/team-members/allow",
  "/team-members/apply",
];

export const accessTokenAuthenticationInterceptor = {
  onFulfilled: (config: AxiosRequestConfig) => {
    // const isRequiredAccessTokenUrl = requiredAccessTokenUrlWhiteList.some((whiteListUrl) => {
    //   return config.url?.includes(whiteListUrl);
    // });
    const accessTokenFromStorage = localStorage.getItem(ACCESS_TOKEN_NAME);
    if (accessTokenFromStorage) {
      config.headers = { Authorization: `Bearer ${accessTokenFromStorage}` };
    } else {
      return (document.location.href = "/login");
    }
    return config;
  },
  onRejected: (error: unknown) => {
    alert(error);
  },
};
