import requester from "../config/config";
import { isSuccess } from "../../modules/httpValidation";

export async function deleteMyCreatedTeamApi(teamId: number) {
  const response = await requester.delete(`/my-teams/${teamId}`);
  if (!isSuccess(response)) {
    return alert("다시 시도해주세요");
  }
  return response.data;
}
