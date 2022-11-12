import { CAREER_RANGE, ROLE_MAIN } from "./fieldType";

export type UserMeReturnType = {
  email: string;
  nickname: string;
  roleMain: ROLE_MAIN;
  careerRange: CAREER_RANGE;
  tagList: string[];
};

export type UpdateUserType = {
  nickname: string;
  roleMain: ROLE_MAIN;
  careerRange: CAREER_RANGE;
  tagNameList: string[];
};
