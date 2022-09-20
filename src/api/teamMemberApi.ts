import requester from "./config/config";
import { AllowMemberListReturnType, ApplyMemberListReturnType } from "./types/teamMemberType";

export default class TeamMemberApi {
  static getAllowMemberList(): Promise<AllowMemberListReturnType> {
    return requester.get(`${process.env.REACT_APP_HOST_NAME}/api/team-members/allow`);
  }

  static getApplyMemberList(): Promise<ApplyMemberListReturnType> {
    return requester.get(`${process.env.REACT_APP_HOST_NAME}/api/team-members/apply`);
  }
}
