import { ROLE_DETAIL, TEAM_CATEGORY, TEAM_DELETE_FAIL_CODE, TEAM_PARTY_MEMBER_STATUS } from "./fieldType";
import { TeamReturnType } from "./teamType";

export type MyTeamHistoryReturnType = { list: TeamReturnType[] };

export type TeamPartyReturnType = {
  teamId: number;
  teamCategory: TEAM_CATEGORY;
  title: string;
  roleDetail: ROLE_DETAIL;
  createdAt: string;
  memberStatus: TEAM_PARTY_MEMBER_STATUS;
  memo: string;
};

export type MyTeamPartyReturnType = { list: TeamPartyReturnType[] };

export type MyTeamDeleteReturnType = {
  result: boolean;
  failCode?: TEAM_DELETE_FAIL_CODE;
};
