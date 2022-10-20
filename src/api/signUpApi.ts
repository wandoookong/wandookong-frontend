import requester from "./config/config";
import { CAREER_RANGE } from "./types/fieldType";
import { isEmpty } from "../@types/utility/typeGuard";

interface Request {
  userSocialId: number;
  nickname: string;
  roleMain: MyRole | "";
  careerRange: CAREER_RANGE | "";
  tagNameList?: string[];
}

interface nickname {
  nickname: string;
}

interface Response {
  accessToken: string;
}

interface isValid {
  isAvailable: boolean;
}

export default class signUpApi {
  static createUser(request: Request): Promise<Response> {
    if (isEmpty(request.roleMain)) {
      throw new Error("정의된 역할이 없습니다.");
    }
    if (isEmpty(request.careerRange)) {
      throw new Error("정의된 연차 정보가 없습니다.");
    }
    return requester.post(`${process.env.REACT_APP_HOST_NAME}/api/users`, request);
  }

  static checkNickname(value: nickname): Promise<isValid> {
    return requester.put(`${process.env.REACT_APP_HOST_NAME}/api/users/nickname/check`, value);
  }
}
