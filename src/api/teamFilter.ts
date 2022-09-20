import requester from "./config/config";

export default function TeamFilter(query) {
  return requester.get(`${process.env.REACT_APP_HOST_NAME}/api/teams${query}`);
}
