import { CAREER_RANGE, ROLE_MAIN, TEAM_CATEGORY } from "../../../api/types/fieldType";

export function roleMainText(roleMain: ROLE_MAIN) {
  switch (roleMain) {
    case "pm":
      return "기획자";
    case "design":
      return "디자이너";
    case "dev":
      return "개발자";
  }
}

export function careerRangeText(careerRange: CAREER_RANGE) {
  switch (careerRange) {
    case "0_4":
      return "0~4년차";
    case "4_10":
      return "4~10년차";
    case "10_100":
      return "10년차~";
  }
}

export function teamCategoryText(teamCategory: TEAM_CATEGORY) {
  switch (teamCategory) {
    case "portfolio":
      return "포트폴리오";
    case "side_project":
      return "사이드 프로젝트";
  }
}
