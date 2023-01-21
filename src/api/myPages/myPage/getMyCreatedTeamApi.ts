import requester from "../../config/config";

export async function getMyCreatedTeamApi() {
  return await requester.get(`/my-teams/current-open`);
}
