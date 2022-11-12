type TeamCategory = "portfolio" | "side_project" | ""; //빈 값은 전체이다.

type TeamFilters = {
  roleDetail: Role;
  teamCategory: TeamCategory;
};
