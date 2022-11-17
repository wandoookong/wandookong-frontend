import requester from "./config/config";
import { UpdateUserType, UserMyInfo } from "./types/userType";

export default class UserApi {
  static getUserMe(): Promise<UserMyInfo> {
    return requester.get(`${process.env.REACT_APP_HOST_NAME}/api/users/me`);
  }

  static updateUserMe(data: UpdateUserType) {
    return requester.put(`${process.env.REACT_APP_HOST_NAME}/api/users/me`, data);
  }
}
