import AppIcon from "../assets/positionImages/app.png";
import UXIcon from "../assets/positionImages/ux.png";
import FrontIcon from "../assets/positionImages/front.png";
import BackIcon from "../assets/positionImages/backend.png";
import ProductIcon from "../assets/positionImages/product.png";

export function convertValueToImageUrl(target: string) {
  switch (target) {
    case "app":
      return AppIcon;
    case "web_front":
      return FrontIcon;
    case "ux_ui":
      return UXIcon;
    case "back_end":
      return BackIcon;
    case "product":
      return ProductIcon;
    default:
      return "none";
  }
}

export function convertNameToImageUrl(target) {
  switch (target) {
    case "앱 개발":
      return AppIcon;
    case "웹 프론트":
      return FrontIcon;
    case "UX/UI":
      return UXIcon;
    case "백엔드":
      return BackIcon;
    case "서비스 기획":
      return ProductIcon;
    default:
      return "none";
  }
}
