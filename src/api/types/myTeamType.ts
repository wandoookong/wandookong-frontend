import { TEAM_CATEGORY, TEAM_PARTY_MEMBER_STATUS } from "./fieldType";
import { TeamReturnType } from "./teamType";

export type MyTeamHistoryReturnType = { list: TeamReturnType[] };

export type TeamPartyReturnType = {
  teamId: number;
  teamCategory: TEAM_CATEGORY;
  title: string;
  createdAt: Date;
  memberStatus: TEAM_PARTY_MEMBER_STATUS;
  memo: string;
};

export type MyTeamPartyReturnType = { list: TeamPartyReturnType[] };
