import requester from "../config/config";
import { isEmpty } from "../../@types/utility/typeGuard";
import { SignUpType } from "../../@types/dto/signUpType";
import { isSuccess } from "../../modules/httpValidation";

export async function signUpApi(request: SignUpType) {
  if (isEmpty(request.roleMain)) {
    throw new Error("정의된 역할이 없습니다.");
  }
  if (isEmpty(request.careerRange)) {
    throw new Error("정의된 연차 정보가 없습니다.");
  }
  const response = await requester.post(`${process.env.REACT_APP_HOST_NAME}/api/users`, request);

  if (!isSuccess(response)) {
    return alert("다시 시도해주세요");
  }
  return response.data;
}
