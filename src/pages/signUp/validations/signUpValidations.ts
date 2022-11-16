import { required } from "../../../@types/utility/typeGuard";

export const ErrorMessageState = {
  empty: "닉네임을 입력해주세요.",
  valid: "사용 가능한 닉네임입니다.",
  occupied: "이미 사용중인 닉네임입니다.",
};

const validate = {
  validation: required,
  errorMessage: ErrorMessageState.empty,
};

export const validateNickName = (value: string): string => {
  let result: string = "";
  const isValid: boolean = validate.validation(value);
  if (!isValid) {
    result = validate.errorMessage;
    return result;
  }
  return result;
};
