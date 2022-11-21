import { CAREER_RANGE, ROLE_DETAIL } from "../model/fieldType";

export interface MyCreatedTeamAcceptedMember {
  careerRange: CAREER_RANGE;
  memo: string;
  nickname: string;
  roleDetail: ROLE_DETAIL;
  tagList: string[];
  teamMemberId: number;
}
