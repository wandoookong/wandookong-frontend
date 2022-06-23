type TeamCategory = "portfolio" | "side_project" | ""; // DEFAULT 값은 빈값이다. 단, 빈값일 시, 생성될 수 없다.

interface AcceptableMembers {
  product: number;
  ux_ui: number;
  app: number;
  web_front: number;
  back_end: number;
}
