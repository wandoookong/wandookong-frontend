import requester from "../../config/config";
import { isSuccess } from "../../../modules/httpValidation";

export async function setAcceptedMemberCancelApi(teamMemberId: number) {
  const response = await requester.delete(`/team-members/${teamMemberId}`);
  if (!isSuccess(response)) {
    return alert("다시 시도해주세요");
  }
  return response.data;
}
