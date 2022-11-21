import { MEMBER_STATUS, ROLE_DETAIL, TEAM_CATEGORY } from "../model/fieldType";

export interface MyJoinedTeamType {
  createdAt: string;
  memberStatus: MEMBER_STATUS;
  memo: string;
  roleDetail: ROLE_DETAIL;
  teamCategory: TEAM_CATEGORY;
  teamId: number;
  title: string;
}
