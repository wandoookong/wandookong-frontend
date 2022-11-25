import requester from "../config/config";
import { isSuccess } from "../../modules/httpValidation";

export async function getIsValidToCreateTeamApi() {
  const response = await requester.post(`${process.env.REACT_APP_HOST_NAME}/api/teams/pre-create`);
  if (!isSuccess(response)) {
    return alert("다시 시도해주세요");
  }
  return response.data;
}
