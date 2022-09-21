//빈 값은 전체이다.
type RoleDetail = "app" | "web_front" | "back_end" | "ux_ui" | "product" | "";
type TeamCategory = "portfolio" | "side_project" | "";

type TeamFilters = {
  roleDetail: RoleDetail;
  teamCategory: TeamCategory;
};
