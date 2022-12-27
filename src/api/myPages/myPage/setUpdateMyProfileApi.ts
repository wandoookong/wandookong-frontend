import requester from "../../config/config";
import { isSuccess } from "../../../modules/httpValidation";
import { SetUpdateMyProfile } from "../../../@types/dto/setUpdateMyProfile";

export default async function setUpdateMyProfileApi(value: SetUpdateMyProfile) {
  const response = await requester.put(`/users/me`, value);
  if (!isSuccess(response)) {
    return alert("다시 시도해주세요");
  }
  return response.data;
}
