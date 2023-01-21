import requester from "../../config/config";

export async function getPendingMembersApi() {
  return await requester.get(`/team-members/apply`);
}
