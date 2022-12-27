import requester from "../../config/config";
import { isSuccess } from "../../../modules/httpValidation";

export async function getAcceptedMembersApi() {
  const response = await requester.get(`/team-members/allow`);
  if (!isSuccess(response)) {
    return alert("다시 시도해주세요");
  }
  return response.data.list;
}
