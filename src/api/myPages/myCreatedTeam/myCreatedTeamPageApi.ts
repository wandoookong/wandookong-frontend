import { getMyCreatedTeamApi } from "../myPage/getMyCreatedTeamApi";
import { getPendingMembersApi } from "./getPendingMembersApi";
import { getAcceptedMembersApi } from "./getAcceptedMembersApi";
import { isSuccess } from "../../../modules/httpValidation";

export async function MyCreatedTeamPageApi() {
  const response = await Promise.all([getMyCreatedTeamApi(), getPendingMembersApi(), getAcceptedMembersApi()]);
  const isEverySuccess = response.every((api) => isSuccess(api));
  if (!isEverySuccess) {
    return { success: false, message: "다시 시도해주세요." };
  }
  return {
    success: true,
    myCreatedTeam: response[0].data,
    pendingMembers: response[1].data.list,
    acceptedMembers: response[2].data.list,
  };
}
