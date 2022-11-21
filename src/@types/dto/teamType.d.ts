import { CAREER_RANGE, ROLE_DETAIL, TEAM_CATEGORY } from "../model/fieldType";

//내가 작성

//분리
type CurrentOpenTeamReturnType = {
  teamId: number;
  teamCategory: TEAM_CATEGORY;
  title: string;
  closeDueYmd: string;
  createdAt: string;
  currentTimestamp: number;
  applyCount: number;
  allowCount: number;
  capacityCount: number;
};

type TeamReturnType = {
  teamId: number;
  teamCategory: TEAM_CATEGORY;
  title: string;
  description: string;
  createdAt: string;
  closeDueYmd: string;
  teamStatus: string;
  teamDetailStatus: string;
  teamCapacityList: {
    teamCapacityId: number;
    roleDetail: ROLE_DETAIL;
    roleDetailName: string;
    roleMemberCount: number;
    roleMaxCount: number;
    teamLead?: boolean;
    careerRange?: CAREER_RANGE;
    careerRangeName?: string;
    tagList?: string[];
  }[];
};

type TeamListReturnType = { list: TeamReturnType[] };
