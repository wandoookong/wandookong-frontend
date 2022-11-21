import { ROLE_DETAIL, TEAM_CATEGORY } from "../model/fieldType";

export interface SetTeamResponse {
  teamId: number;
  result: boolean;
  failCode?: string;
}

export interface SetTeamValue {
  teamCategory: TEAM_CATEGORY | "";
  title: string;
  description: string;
  contact: string;
  myRole: ROLE_DETAIL | "";
  member: AcceptableMembers;
}

export interface AcceptableMembers {
  product: number;
  ux_ui: number;
  app: number;
  web_front: number;
  back_end: number;
}
