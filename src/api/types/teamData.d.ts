import { TEAM_CATEGORY } from "../../@types/model/fieldType";

type TeamData = {
  teamId: number;
  title: string;
  teamCategory: TEAM_CATEGORY;
  description: string;
  closeDueYmd: string;
  teamStatus: string;
  teamCapacityList: [
    {
      teamCapacityId: number;
      roleDetail: string;
      roleDetailName: string;
      roleMaxCount: number;
      teamLead: boolean;
      careerRange: string;
      careerRangeName: string;
      tagList: string[];
    },
  ];
  teamDetailStatus: string;
};
