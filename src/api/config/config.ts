import axios from "axios";

export const HOST_NAME = "https://wandookongproject.com";
// 알아보기 힘들게 하려고 일부러 이름을 이렇게 했어요.
export const ACCESS_TOKEN_NAME = "w_d_k_t";

const getToken = () => localStorage.getItem(ACCESS_TOKEN_NAME);

const requester = axios.create({
  baseURL: `${HOST_NAME}/api`,
  timeout: 5000,
  headers: getToken() ? { Authorization: `Bearer ${getToken()}` } : undefined,
});

requester.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      console.log("auth error");
      return (window.location.href = "/login");
    }
    alert(error.response?.data?.message ?? "잠시 후 다시 시도해주세요");
    console.log(error.response?.data);
  },
);

export default requester;
