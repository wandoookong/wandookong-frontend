import requester from "./config/config";

export default function TeamFilter(query) {
  return requester.get(`/teams?${query}`);
}
