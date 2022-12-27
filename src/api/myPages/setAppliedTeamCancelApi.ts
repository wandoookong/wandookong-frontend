import requester from "../config/config";
import { isSuccess } from "../../modules/httpValidation";

export async function setAppliedTeamCancelApi(teamId: number) {
  const response = await requester.put(`/teams/${teamId}/apply/cancel`);
  if (!isSuccess(response)) {
    return alert("다시 시도해주세요");
  }
  return response.data;
}
