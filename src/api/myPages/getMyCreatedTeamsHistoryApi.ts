import requester from "../config/config";
import { isSuccess } from "../../modules/httpValidation";

export async function getMyCreatedTeamsHistoryApi() {
  const response = await requester.get(`/my-teams/history`);
  if (!isSuccess(response)) {
    return alert("다시 시도해주세요");
  }
  return response.data.list;
}
