import requester from "./config/config";
import { UserMeReturnType, UpdateUserType } from "./types/userType";

export default class UserApi {
  static getUserMe(): Promise<UserMeReturnType> {
    return requester.get(`${process.env.REACT_APP_HOST_NAME}/api/users/me`);
  }

  static updateUserMe(data: UpdateUserType) {
    return requester.put(`${process.env.REACT_APP_HOST_NAME}/api/users/me`, data);
  }
}
