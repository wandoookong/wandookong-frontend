import requester from "../../config/config";
import { isSuccess } from "../../../modules/httpValidation";

//TODO layer링
export async function getUserMyInfoApi() {
  const response = await requester.get(`${process.env.REACT_APP_HOST_NAME}/api/users/me`);
  if (!isSuccess(response)) {
    return alert("다시 시도해주세요");
  }
  return response.data;
}
