import { required } from "../../../@types/utility/typeGuard";

const validateNickNameLength = (target: string): boolean => {
  return target.length < 11;
};

export const ErrorMessageState = {
  empty: "닉네임을 입력해주세요.",
  over: "최대 10자까지 입력할 수 있습니다.",
};

const validate = [
  {
    validation: required,
    errorMessage: ErrorMessageState.empty,
  },
  {
    validation: validateNickNameLength,
    errorMessage: ErrorMessageState.over,
  },
];

export const validateNickName = (value: string): string => {
  let result: string = "";
  validate.every((validate) => {
    let isValid = validate.validation(value);
    if (!isValid) {
      result = validate.errorMessage;
      return result;
    }
    return isValid;
  });
  return result;
};
