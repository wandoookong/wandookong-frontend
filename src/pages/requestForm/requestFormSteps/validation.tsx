import React from "react";
import { required } from "../../../@types/utility/typeGuard";

export const onChangeRequestInfos = (e) => {
  const value = e.currentTarget.value;
  return value;
};

const categoryValidates = {
  validation: required,
  errorMessage: "카테고리를 선택하세요.",
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

const titleValidates = {
  validation: required,
  errorMessage: "제목을 입력하세요.",
};

export const titleValidation = (value) => {
  let result: string = "";
  const isValid: boolean = titleValidates.validation(value);
  if (!isValid) {
    result = titleValidates.errorMessage;
    return result;
  }
  return result;
};

const myRoleValidates = {
  validation: required,
  errorMessage: "포지션을 선택하세요.",
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
  errorMessage: "1개 이상의 포지션을 선택하세요.",
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
  errorMessage: "설명을 작성해주세요",
};

export const descriptionValidation = (value) => {
  let result: string = "";
  const isValid: boolean = roles.validation(value);
  if (!isValid) {
    result = description.errorMessage;
    return result;
  }
  return result;
};
