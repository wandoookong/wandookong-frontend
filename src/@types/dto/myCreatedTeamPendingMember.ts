import { CAREER_RANGE, MEMBER_STATUS, ROLE_DETAIL } from "../model/fieldType";

export interface MyCreatedTeamPendingMember {
  careerRange: CAREER_RANGE;
  memberStatus: MEMBER_STATUS;
  memo: string;
  nickname: string;
  roleDetail: ROLE_DETAIL;
  tagList: string[];
  teamMemberId: number;
}
