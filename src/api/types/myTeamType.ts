import { ROLE_DETAIL, TEAM_CATEGORY, TEAM_PARTY_MEMBER_STATUS } from "../../@types/model/fieldType";
import { TeamReturnType } from "../../@types/dto/teamType";

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
