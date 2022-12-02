import { CAREER_RANGE, ROLE_MAIN } from "../model/fieldType";

export interface SignUpType {
  userSocialId: number;
  nickname: string;
  roleMain: ROLE_MAIN | "";
  careerRange: CAREER_RANGE | "";
  tagNameList?: string[];
}
