import requester from "../config/config";
import { isSuccess } from "../../modules/httpValidation";

export default async function checkNicknameApi(value: { nickname: string }) {
  const response = await requester.put(`/users/nickname/check`, value);
  if (!isSuccess(response)) {
    return alert("다시 시도해주세요");
  }
  return response.data;
}
