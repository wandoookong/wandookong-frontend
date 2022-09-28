import requester from "./config/config";

export default function TeamFilter() {
  return requester.get(`/teams`);
}
