import requester from "../config/config";
import { isSuccess } from "../../modules/httpValidation";
import { SetTeamValue } from "../../@types/dto/setTeam";

export async function setTeamApi(value: SetTeamValue) {
  const response = await requester.post(`${process.env.REACT_APP_HOST_NAME}/api/teams`, value);
  if (!isSuccess(response)) {
    return alert("다시 시도해주세요.");
  }
  return response.data;
}
