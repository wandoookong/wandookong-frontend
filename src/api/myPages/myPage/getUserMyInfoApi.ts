import requester from "../../config/config";
import { isSuccess } from "../../../modules/httpValidation";

export async function getUserMyInfoApi() {
  return await requester.get(`/users/me`);
}

export async function getUserProfileApi() {
  const response = await requester.get(`/users/me`);
  if (!isSuccess(response)) {
    return alert("다시 시도해주세요.");
  }
  return response.data;
}
