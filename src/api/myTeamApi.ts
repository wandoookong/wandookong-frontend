import requester from "./config/config";
import { MyTeamDeleteReturnType } from "./types/myTeamType";

export default class MyTeamApi {
  static deleteMyTeam(teamId: number): Promise<MyTeamDeleteReturnType> {
    return requester.delete(`${process.env.REACT_APP_HOST_NAME}/api/my-teams/${teamId}`);
  }
}
