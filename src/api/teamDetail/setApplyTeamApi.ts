import requester from "../config/config";
import { ApplyTeamForm } from "../../@types/dto/setApplyTeam";
import { isSuccess } from "../../modules/httpValidation";

export async function setApplyTeamApi(teamId: number, value: ApplyTeamForm) {
  const response = await requester.post(`/teams/${teamId}/apply`, value);
  if (!isSuccess(response)) {
    return alert("다시 시도해주세요");
  }
  return response.data;
}
