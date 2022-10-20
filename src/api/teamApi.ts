import requester from "./config/config";
import { TeamListReturnType } from "./types/teamType";

interface State {
  teamCategory: TeamCategory;
  title: string;
  description: string;
  contact: string;
  myRole: Role;
  member: AcceptableMembers;
}

interface Props {
  teamId: number;
}

export default class TeamApi {
  static getTeamList(query?: string): Promise<TeamListReturnType> {
    return requester.get(`${process.env.REACT_APP_HOST_NAME}/api/teams/${query}`);
  }

  static getTeamData(teamId: number): Promise<TeamData> {
    return requester.get(`${process.env.REACT_APP_HOST_NAME}/api/teams/${teamId}`);
  }

  static setTeam(value: State): Promise<Props> {
    return requester.post(`${process.env.REACT_APP_HOST_NAME}/api/teams`, value);
  }
}
