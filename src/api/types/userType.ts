import { CAREER_RANGE, ROLE_MAIN } from "../../@types/model/fieldType";

export type UpdateUserType = {
  nickname: string;
  roleMain: ROLE_MAIN;
  careerRange: CAREER_RANGE;
  tagNameList: string[];
};
