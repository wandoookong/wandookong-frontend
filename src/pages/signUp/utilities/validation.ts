import { required } from "../../../@types/utility/typeGuard";

const validate = {
  validation: required,
  errorMessage: "닉네임을 입력해주세요.",
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
