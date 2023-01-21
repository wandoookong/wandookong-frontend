import requester from "../../config/config";

export async function getAcceptedMembersApi() {
  return await requester.get(`/team-members/allow`);
}
