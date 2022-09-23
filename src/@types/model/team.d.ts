//빈 값은 전체이다.
type TeamCategory = "portfolio" | "side_project" | "";

type TeamFilters = {
  roleDetail: Role;
  teamCategory: TeamCategory;
};
