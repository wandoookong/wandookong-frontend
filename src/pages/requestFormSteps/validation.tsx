import React from "react";
import { required } from "../../@types/utility/typeGuard";

const categoryValidates = {
  validation: required,
  errorMessage: "카테고리를 선택하세요.",
};

export const onChangeCategory = (e) => {
  const value = e.currentTarget.value as HTMLInputElement;
  return { category: value };
};

export const categoryValidation = (value) => {
  let result: string = "";
  const isValid: boolean = categoryValidates.validation(value);
  if (!isValid) {
    result = categoryValidates.errorMessage;
    return result;
  }
  return result;
};
