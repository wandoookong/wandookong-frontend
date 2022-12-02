import { isEmpty, required } from "../../../@types/utility/typeGuard";
import { CAREER_RANGE, ROLE_MAIN } from "../../../@types/model/fieldType";

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

export const validatePosition = (roleMain: ROLE_MAIN | "", careerRange: CAREER_RANGE | "") => {
  let position = "";
  let career = "";
  if (isEmpty(roleMain)) {
    position = "현재 포지션을 선택해주세요.";
  }
  if (isEmpty(careerRange)) {
    career = "연차를 선택해주세요.";
  }
  return { position, career };
};
