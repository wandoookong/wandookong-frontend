import requester from "./config/config";

interface Props {
  accessToken: string;
}

export default class signUpApi {
  static setUser(value: SignUpType): Promise<Props> {
    return requester.post(`${process.env.REACT_APP_HOST_NAME}/api/users`);
  }
}
