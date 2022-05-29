import React from "react";
import { isEmpty } from "../../@types/utility/typeGuard";

export const categoryValidation = () => {
  return isEmpty(formInfos.category);
};

export const categoryValidates = {
  validation: categoryValidation,
  errorMessage: "카테고리를 선택하세요.",
};

export const onChangeCategory = (e) => {
  const value = e.currentTarget.value as HTMLInputElement
  return { ...formInfos, category: value };
};

export const onNextStep = () => {
  let result = "a";
  const isValid = categoryValidates.validation();
  if (!isValid) {
    console.log(isValid);
    return (result = categoryValidates.errorMessage);
  }
  return result;
};
