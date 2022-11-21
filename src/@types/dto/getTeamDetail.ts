import { CAREER_RANGE, ROLE_DETAIL, TEAM_CATEGORY, TEAM_DETAIL_STATUS, TEAM_STATUS } from "../model/fieldType";

export interface TeamDetailType {
  closeDueYmd: string;
  description: string;
  teamCapacityList: {
    roleDetail: ROLE_DETAIL;
    roleDetailName: string;
    roleMaxCount: number;
    teamCapacityId: number;
    teamLead?: boolean;
    careerRangeName?: string;
    careerRange?: CAREER_RANGE;
    tagList?: string[];
  }[];
  teamCategory: TEAM_CATEGORY;
  teamDetailStatus: TEAM_DETAIL_STATUS;
  teamId: number;
  teamStatus: TEAM_STATUS;
  title: string;
}
