import { CAREER_RANGE, ROLE_MAIN } from "../model/fieldType";

export interface UserMyInfoType {
  careerRange: CAREER_RANGE;
  email: string;
  nickname: string;
  roleMain: ROLE_MAIN;
  tagList: string[];
}
