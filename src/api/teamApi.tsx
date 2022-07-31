import { requester } from "./config/config";

export async function TeamApi() {
  try {
    const response = await requester.get("/teams");
    if (response.status !== 200) {
      return {
        success: false,
        message: "잠시 후 다시 시도하세요",
      };
    }
    return {
      success: true,
      data: response,
    };
  } catch (e) {
    return {
      success: false,
      message: "잠시 후 다시 시도해주세요.",
    };
  }
}
