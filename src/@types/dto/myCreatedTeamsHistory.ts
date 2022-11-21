import { ROLE_DETAIL, TEAM_CATEGORY } from "../model/fieldType";

export interface MyCreatedTeamsHistory {
  closeDueYmd: string;
  createdAt: string;
  teamCategory: TEAM_CATEGORY;
  teamId: number;
  title: string;
  teamCapacityList: {
    roleDetail: ROLE_DETAIL;
    roleDetailName: string;
    roleMaxCount: number;
    roleMemberCount: number;
    teamCapacityId: number;
  }[];
}
