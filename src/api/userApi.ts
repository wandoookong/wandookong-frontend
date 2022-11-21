import requester from "./config/config";
import { UpdateUserType } from "./types/userType";

export default class UserApi {
  static updateUserMe(data: UpdateUserType) {
    return requester.put(`${process.env.REACT_APP_HOST_NAME}/api/users/me`, data);
  }
}
