import axios from "axios";

export const requester = axios.create({
  baseURL: "https://wandookongproject.com/api",
  withCredentials: true,
});
