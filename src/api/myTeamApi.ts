import requester from "./config/config";
import { CurrentOpenTeamReturnType } from "./types/teamType";
import { MyTeamHistoryReturnType, MyTeamPartyReturnType } from "./types/myTeamType";

export default class MyTeamApi {
  static getCurrentOpenTeam(): Promise<CurrentOpenTeamReturnType> {
    return requester.get(`${process.env.REACT_APP_HOST_NAME}/api/my-teams/current-open`);
  }

  static getMyTeamHistory(): Promise<MyTeamHistoryReturnType> {
    return requester.get(`${process.env.REACT_APP_HOST_NAME}/api/my-teams/history`);
  }

  static getMyTeamParty(): Promise<MyTeamPartyReturnType> {
    return requester.get(`${process.env.REACT_APP_HOST_NAME}/api/my-teams/party`);
  }
}
