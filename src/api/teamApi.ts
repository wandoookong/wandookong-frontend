import requester from "./config/config";
import { TeamListReturnType } from "./types/teamType";

export default class TeamApi {
  static getTeamList(): Promise<TeamListReturnType> {
    return requester.get(`${process.env.REACT_APP_HOST_NAME}/api/teams`);
  }

  static getTeamData(teamId: number): Promise<TeamData> {
    return requester.get(`${process.env.REACT_APP_HOST_NAME}/api/teams/${teamId}`);
  }
}
