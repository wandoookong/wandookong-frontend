import React from "react";

const required = (value: string) => {
  return value.length > 0;
};

const categoryValidates = {
  validation: required,
  errorMessage: "카테고리를 선택하세요.",
};

export const onChangeCategory = (e) => {
  const value = e.currentTarget.value as HTMLInputElement;
  return { category: value };
};

export const onNextStepValidation = (data) => {
  let result = "";
  const isValid = categoryValidates.validation(data);
  if (!isValid) {
    result = categoryValidates.errorMessage;
    return result;
  }
  return result;
};
