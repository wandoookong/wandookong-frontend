import { required } from "../../../@types/utility/typeGuard";

const signUpTitleLengthCheck = (target: string): boolean => {
  return target.length < 21;
};

const categoryValidates = {
  validation: required,
  errorMessage: "완두콩 종류를 선택해주세요.",
};

export const categoryValidation = (value: string): string => {
  let result: string = "";
  const isValid: boolean = categoryValidates.validation(value);
  if (!isValid) {
    result = categoryValidates.errorMessage;
    return result;
  }
  return result;
};

const validateTitle = [
  {
    validation: required,
    errorMessage: "완두콩 제목을 작성해주세요.",
  },
  {
    validation: signUpTitleLengthCheck,
    errorMessage: "최대 20자까지 입력할 수 있습니다.",
  },
];

export const titleValidation = (value: string): string => {
  let result: string = "";
  validateTitle.every((validate) => {
    const isValid: boolean = validate.validation(value);
    if (!isValid) {
      result = validate.errorMessage;
    }
    return isValid;
  });
  return result;
};

const myRoleValidates = {
  validation: required,
  errorMessage: "포지션을 선택해주세요.",
};

export const myRoleValidation = (value) => {
  let result: string = "";
  const isValid: boolean = myRoleValidates.validation(value);
  if (!isValid) {
    result = myRoleValidates.errorMessage;
    return result;
  }
  return result;
};

const rolesValidate = (value) => {
  return Object.values(value).includes(1);
};

export const roles = {
  validation: rolesValidate,
  errorMessage: "포지션 콩은 최소 1개 선택해주세요.",
};

export const rolesValidation = (value) => {
  let result: string = "";
  const isValid: boolean = roles.validation(value);
  if (!isValid) {
    result = roles.errorMessage;
    return result;
  }
  return result;
};

const description = {
  validation: required,
  errorMessage: "완두콩 소개 글을 작성해주세요.",
};

export const descriptionValidation = (value) => {
  let result: string = "";
  const isValid: boolean = description.validation(value);
  if (!isValid) {
    result = description.errorMessage;
    return result;
  }
  return result;
};

const contact = {
  validation: required,
  errorMessage: "참여 링크를 입력해주세요.",
};

export const contactValidation = (value) => {
  let result: string = "";
  const isValid: boolean = contact.validation(value);
  if (!isValid) {
    result = contact.errorMessage;
    return result;
  }
  return result;
};
