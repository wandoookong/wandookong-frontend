import { TEAM_CATEGORY } from "../model/fieldType";

export interface MyCreatedTeamType {
  allowCount: number;
  applyCount: number;
  capacityCount: number;
  closeDueYmd: string;
  currentTimestamp: number;
  teamCategory: TEAM_CATEGORY;
  teamId: number;
  title: string;
}
