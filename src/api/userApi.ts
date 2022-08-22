import requester from "./config/config";
import { UserMeReturnType } from "./types/userType";

export default class UserApi {
  static getUserMe(): Promise<UserMeReturnType> {
    return requester.get(`${process.env.REACT_APP_HOST_NAME}/api/users/me`);
  }
}
