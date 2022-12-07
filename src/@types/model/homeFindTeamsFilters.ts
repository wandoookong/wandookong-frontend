import { ROLE_DETAIL, TEAM_CATEGORY } from "./fieldType";

//빈 값은 전체이다
export interface TeamFilters {
  roleDetail: ROLE_DETAIL | "";
  teamCategory: TEAM_CATEGORY | "";
}
