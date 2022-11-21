import requester from "../config/config";
import { isSuccess } from "../../modules/httpValidation";

export async function getTeamDetailApi(teamId: number) {
  const response = await requester.get(`${process.env.REACT_APP_HOST_NAME}/api/teams/${teamId}`);
  if (!isSuccess(response)) {
    return alert("다시 시도해주세요.");
  }
  return response.data;
}
