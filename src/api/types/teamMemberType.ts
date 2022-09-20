import { ROLE_DETAIL, MEMBER_STATUS, CAREER_RANGE, ROLE_MAIN } from "./fieldType";

export type AllowMemberReturnType = {
  teamMemberId: number;
  nickname: string;
  roleMain: ROLE_MAIN;
  careerRange: CAREER_RANGE;
  tagList: string[];
  roleDetail: ROLE_DETAIL;
  memo: string;
};

export type AllowMemberListReturnType = { list: AllowMemberReturnType[] };

export type ApplyMemberReturnType = AllowMemberReturnType & {
  memberStatus: MEMBER_STATUS;
};

export type ApplyMemberListReturnType = { list: ApplyMemberReturnType[] };
