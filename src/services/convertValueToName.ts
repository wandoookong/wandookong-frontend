import { CAREER_RANGE, ROLE_DETAIL, ROLE_MAIN, TEAM_CATEGORY, TEAM_PARTY_MEMBER_STATUS } from "../api/types/fieldType";

export function roleMainText(target: ROLE_MAIN) {
  switch (target) {
    case "pm":
      return "기획자";
    case "design":
      return "디자이너";
    case "dev":
      return "개발자";
  }
}

export function roleDetailText(target: ROLE_DETAIL) {
  switch (target) {
    case "app":
      return "앱 개발자";
    case "product":
      return "서비스 기획자";
    case "back_end":
      return "백엔드";
    case "ux_ui":
      return "UX/UI";
    case "web_front":
      return "웹 프론트";
  }
}

export function careerRangeText(target: CAREER_RANGE) {
  switch (target) {
    case "0_4":
      return "0~4년차";
    case "4_10":
      return "4~10년차";
    case "10_100":
      return "10년차~";
  }
}

export function teamCategoryText(target: TEAM_CATEGORY) {
  switch (target) {
    case "portfolio":
      return "포트폴리오";
    case "side_project":
      return "사이드 프로젝트";
  }
}

export function teamStateTagText(target: TEAM_PARTY_MEMBER_STATUS) {
  switch (target) {
    case "apply":
      return "대기중";
    case "allow":
      return "참여 수락";
    case "deny":
      return "참여 거절";
    case "expired":
      return "기간 만료";
  }
}
