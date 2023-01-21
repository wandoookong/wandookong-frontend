import { getUserMyInfoApi } from "./getUserMyInfoApi";
import { getMyCreatedTeamApi } from "./getMyCreatedTeamApi";
import { isSuccess } from "../../../modules/httpValidation";

export async function MyPageApi() {
  try {
    const response = await Promise.all([getUserMyInfoApi(), getMyCreatedTeamApi()]);
    const isEverySuccess = response.every((api) => isSuccess(api));
    if (!isEverySuccess) {
      return { success: false, message: "다시 시도해주세요." };
    }
    return { success: true, userMyInfo: response[0].data, myCreatedTeam: response[1].data };
  } catch (error) {
    throw error;
  }
}
