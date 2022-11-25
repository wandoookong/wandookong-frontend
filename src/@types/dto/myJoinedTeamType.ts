import { ROLE_DETAIL, TEAM_CATEGORY, TEAM_PARTY_MEMBER_STATUS } from "../model/fieldType";

export interface MyJoinedTeamType {
  createdAt: string;
  memberStatus: TEAM_PARTY_MEMBER_STATUS;
  memo: string;
  roleDetail: ROLE_DETAIL;
  teamCategory: TEAM_CATEGORY;
  teamId: number;
  title: string;
}
