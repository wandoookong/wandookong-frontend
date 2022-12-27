import requester from "../../config/config";
import { isSuccess } from "../../../modules/httpValidation";

export async function getMyCreatedTeamApi() {
  const response = await requester.get(`/my-teams/current-open`);
  if (!isSuccess(response)) {
    return alert("다시 시도해주세요");
  }
  return response.data;
}
