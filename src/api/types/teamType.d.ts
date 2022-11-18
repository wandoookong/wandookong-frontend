import { ROLE_DETAIL, TEAM_CATEGORY } from "./fieldType";

type CurrentOpenTeamReturnType = {
  teamId: number;
  teamCategory: TEAM_CATEGORY;
  title: string;
  closeDueYmd: string;
  applyCount: number;
  allowCount: number;
  capacityCount: number;
};

type TeamReturnType = {
  teamId: number;
  teamCategory: TEAM_CATEGORY;
  title: string;
  closeDueYmd: string;
  createdAt: Date;
  teamCapacityList: {
    teamCapacityId: number;
    roleDetail: ROLE_DETAIL;
    roleDetailName: string;
    roleMaxCount: number;
    roleMemberCount: number;
  }[];
};

type TeamListReturnType = { list: TeamReturnType[] };
