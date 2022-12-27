import requester from "../config/config";
import { isSuccess } from "../../modules/httpValidation";

export async function getHomeTeamsApi(query?: string) {
  const response = await requester.get(`/teams/${query}`);
  if (!isSuccess(response)) {
    return alert("잠시 후 다시 시도해주세요");
  }
  return response.data.list;
}
