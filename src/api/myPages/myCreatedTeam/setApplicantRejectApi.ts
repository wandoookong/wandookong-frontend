import requester from "../../config/config";
import { isSuccess } from "../../../modules/httpValidation";

export async function setApplicantRejectApi(teamMemberId: number) {
  const response = await requester.put(`/team-members/${teamMemberId}/deny`);
  if (!isSuccess(response)) {
    return alert("다시 시도해주세요");
  }
  return response.data;
}
