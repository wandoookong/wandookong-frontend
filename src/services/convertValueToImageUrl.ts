import { ROLE_DETAIL } from "../@types/model/fieldType";
import AppIcon from "../assets/positionImages/app.png";

export function convertValueToImageUrl(target: ROLE_DETAIL) {
  switch (target) {
    case "app":
      return AppIcon;
    case "web_front":
      return "";
    case "ux_ui":
      return "";
    case "back_end":
      return "";
    case "product":
      return "";
    default:
      return "";
  }
}
