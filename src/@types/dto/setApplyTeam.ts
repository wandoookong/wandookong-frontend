import { ROLE_DETAIL } from "../model/fieldType";

export interface ApplyTeamForm {
  roleDetail: ROLE_DETAIL;
  memo: string;
}

export interface ApplyTeamErrorModal {
  state: boolean;
  status: APPLY_TEAM_ERROR_STATUS;
}

export type APPLY_TEAM_ERROR_STATUS = "pending" | "team_lead";
