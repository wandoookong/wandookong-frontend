import { AxiosRequestConfig } from "axios";

export const ErrorHandlingInterceptor = {
  onFulfilled: (config: AxiosRequestConfig) => {
    return config;
  },
  onRejected: (error) => {
    alert(error.response.data.message);
  },
};
