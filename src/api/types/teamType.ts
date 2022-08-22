import { ROLE_DETAIL, TEAM_CATEGORY } from "./fieldType";

export type CurrentOpenTeamReturnType = {
  teamId: number;
  teamCategory: TEAM_CATEGORY;
  title: string;
  closeDueYmd: string;
  applyCount: number;
  allowCount: number;
  capacityCount: number;
};

export type TeamReturnType = {
  teamId: number;
  teamCategory: TEAM_CATEGORY;
  title: string;
  closeDueYmd: string;
  createdAt: Date;
  teamCapacityList: {
    teamCapacityId: number;
    roleDetail: ROLE_DETAIL;
    roleMaxCount: number;
    roleMemberCount: number;
  }[];
};

export type TeamListReturnType = { list: TeamReturnType[] };
